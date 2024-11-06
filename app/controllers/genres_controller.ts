import Genre from '#models/genre'
import Movie from '#models/movie'
import type { HttpContext } from '@adonisjs/core/http'

export default class GenresController {
	async index({ request, response }: HttpContext) {
		const genreId = request.input('genre_id')
		if (genreId) {
			const movies = await Movie.query().where('genre_id', genreId).preload('genre')
			return response.ok(movies)
		}

    const query = request.input('movie_title')
    if (query) {
      const movies = await Movie.query()
        .where('title', 'like', `%${query}%`)
        .preload('genre')

      if (!movies.length) {
        return response.notFound({ message: 'No movies found matching your query' })
      }

      return response.ok(movies)
    }

		const genres = await Genre.all()
		return response.ok(genres)
	}

	async show({ params, response }: HttpContext) {
		const genre = await Genre.findOrFail(params.id)
		return response.ok(genre)
	}
}
