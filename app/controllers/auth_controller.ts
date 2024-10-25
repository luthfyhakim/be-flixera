import User from "#models/user";
import { loginValidator, registerValidator } from "#validators/auth";
import type { HttpContext } from "@adonisjs/core/http";


export default class AuthController {
  async register({ request, response }: HttpContext) {
    const data = await request.validateUsing(registerValidator)

    const user = await User.create(data)

    return response.created(user)
  }

  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)

    return response.ok({
      token: token,
      ...user.serialize()
    })
  }

  async logout({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const token = auth.user?.currentAccessToken.identifier

    if (!token) {
      return response.badRequest({ message: 'Token not found' })
    }

    await User.accessTokens.delete(user, token)

    return response.ok({ message: 'Logout successfully' })
  }

  async me({ auth, response }: HttpContext) {
    await auth.check()
    return response.ok({
      user: auth.user,
    })
  }
}