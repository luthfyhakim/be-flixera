import vine from '@vinejs/vine'

export const movieValidator = vine.compile(
  vine.object({
    title: vine.string(),
    description: vine.string(),
    release_year: vine.number(),
    genre_id: vine.number()
  })
)
