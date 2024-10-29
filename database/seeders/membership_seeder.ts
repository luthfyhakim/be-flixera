import Membership from '#models/membership'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Membership.createMany([
      {
        id: 1,
        name: 'Silver',
        price: 15000
      },
      {
        id: 2,
        name: 'Gold',
        price: 30000,
      },
      {
        id: 3,
        name: 'Platinum',
        price: 55000,
      }
    ])
  }
}