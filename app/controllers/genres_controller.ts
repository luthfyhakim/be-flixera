import Genre from '#models/genre'
import type { HttpContext } from '@adonisjs/core/http'

export default class GenresController {
	async index({ response }: HttpContext) {
		const genres = await Genre.all()
		return response.ok(genres)
	}

	async show({ params, response }: HttpContext) {
		const genre = await Genre.findOrFail(params.id)
		return response.ok(genre)
	}
}