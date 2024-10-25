import User from "#models/user";
import { loginValidator, registerValidator } from "#validators/auth";
import type { HttpContext } from "@adonisjs/core/http";


export default class AuthController {
  async register({ request }: HttpContext) {
    const data = await request.validateUsing(registerValidator)
    const user = await User.create(data)

    return User.accessTokens.create(user)
  }

  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    try {
      const token = await User.verifyCredentials(email, password)
      return User.accessTokens.create(token)
    } catch (error) {
      return response.badRequest({ message: 'Invalid credentials' })
    }
  }

  async logout({ auth, response }: HttpContext) {
    const user = auth.user!
    await User.accessTokens.delete(user, user.currentAccessToken.identifier)
    return response.ok({ message: 'Logged out successfully' })
  }

  async me({ auth, response }: HttpContext) {
    await auth.check()
    return response.ok({
      user: auth.user,
    })
  }
}