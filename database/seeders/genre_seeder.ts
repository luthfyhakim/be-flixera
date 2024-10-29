import Genre from '#models/genre'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Genre.createMany([
      { 
        id: 1,
        name: 'Action' 
      },
      { 
        id: 2,
        name: 'Comedy' 
      },
      { 
        id: 3,
        name: 'Drama' 
      },
      { 
        id: 4,
        name: 'Horror' 
      },
      { 
        id: 5,
        name: 'Romance' 
      },
      { 
        id: 6,
        name: 'Thriller' 
      },
      { 
        id: 7,
        name: 'Fantasy' 
      },
      { 
        id: 8,
        name: 'Adventure'
      }
    ])
  }
}