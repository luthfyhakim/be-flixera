import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Genre from './genre.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Movie extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare image: string

  @column()
  declare playimg: string

  @column()
  declare duration: string

  @column()
  declare description: string

  @column()
  declare releaseYear: number

  @column()
  declare video: string

  @column()
  declare genreId: number

  @column()
  declare trailerimg_1: string

  @column()
  declare trailerimg_2: string

  @belongsTo(() => Genre)
  declare genre: BelongsTo<typeof Genre>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}