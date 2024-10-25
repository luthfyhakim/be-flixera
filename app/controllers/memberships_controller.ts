import Membership from '#models/membership'
import { membershipSubscribeValidator } from '#validators/membership'
import type { HttpContext } from '@adonisjs/core/http'

export default class MembershipsController {
  async index({ response }: HttpContext) {
    const memberships = await Membership.all()
    return response.ok(memberships)
  }

  async subscribe({ request, auth, response }: HttpContext) {
    const { membership_id } = await request.validateUsing(membershipSubscribeValidator)
    const user = auth.user!
    const membership = await Membership.findOrFail(membership_id)

    await user.merge({ membershipId: membership.id }).save()

    return response.ok({
      message: 'Subscribed successfully',
      membership
    })
  }
}