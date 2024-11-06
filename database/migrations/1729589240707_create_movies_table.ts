import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'movies'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('title').notNullable()
      table.text('image')
      table.string('duration')
      table.text('description')
      table.integer('release_year')
      table.string('video')
      table.text('playimg')
      table.text('trailerimg_1').nullable().defaultTo('')
      table.text('trailerimg_2').nullable().defaultTo('')

      table.integer('genre_id').unsigned().references('id').inTable('genres').onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

