import { DateTime } from 'luxon'
import { BaseModel, column, hasMany} from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Movie from './movie.js'


export default class Genre extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Movie) //Genre memiliki banyak file
  declare films: HasMany<typeof Movie>
}