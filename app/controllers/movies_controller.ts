import type { HttpContext } from '@adonisjs/core/http'
import Movie from '#models/movie'
import Genre from '#models/genre'
import { movieValidator } from '#validators/movie'

export default class MoviesController {
  async index({ auth, request, response }: HttpContext) {
    const user = auth.user
    if (user?.membershipId === null) {
      return response.unauthorized({ message: 'You do not have a membership' })
    }

    const query = request.input('title')
    if (query) {
      const movies = await Movie.query()
        .where('title', 'like', `%${query}%`)
        .preload('genre')

      if (!movies.length) {
        return response.notFound({ message: 'No movies found matching your query' })
      }

      return response.ok(movies)
    }

    const movies = await Movie.query().preload('genre')
    return response.ok(movies)
  }

  async list({ auth, request, response }: HttpContext) {
    const user = auth.user
    if (user?.membershipId === null) {
      return response.unauthorized({ message: 'You do not have a membership' })
    }

    const limit = request.input('limit', 6)
    const movies = await Movie.query().preload('genre').limit(limit)
    return response.ok(movies)
  }

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(movieValidator)

    const genre = await Genre.findOrFail(data.genre_id)

    const movie = await Movie.create({
      title: data.title,
      description: data.description,
      releaseYear: data.release_year,
      genreId: genre.id
    })

    return response.created(movie)
  }

  async show({ params, auth, response }: HttpContext) {
    const user = auth.user
    if (user?.membershipId === null) {
      return response.unauthorized({ message: 'You do not have a membership' })
    }

    try {
      const movie = await Movie.query().where('id', params.id).preload('genre').firstOrFail()
      return response.ok(movie)
    } catch (error) {
      return response.notFound({ message: 'Movie not found' })
    }
  }

  async getByGenre({ auth, request, response }: HttpContext) {
    const user = auth.user
    if (user?.membershipId === null) {
      return response.unauthorized({ message: 'You do not have a membership' })
    }

    const genreId = request.input('genre_id')
    if (!genreId) {
      return response.badRequest({ message: 'Genre ID is required' })
    }

    const movies = await Movie.query().where('genre_id', genreId).preload('genre')
    if (!movies.length) {
      return response.notFound({ message: 'No movies found for this genre' })
    }

    return response.ok(movies)
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const movie = await Movie.findOrFail(params.id)
      const data = await request.validateUsing(movieValidator)

      movie.title = data.title
      movie.description = data.description
      movie.releaseYear = data.release_year
      movie.genreId = data.genre_id

      await movie.save()

      return response.json(movie)
    } catch (error) {
      return response.notFound({ message: 'Movie not found' })
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const movie = await Movie.findOrFail(params.id)
      await movie.delete()

      return response.ok({ message: 'Movie deleted successfully' })
    } catch (error) {
      return response.notFound({ message: 'Movie not found' })
    }
  }
}