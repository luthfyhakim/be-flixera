import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const AuthMiddleware = middleware.auth

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/register', '#controllers/auth_controller.register').as('auth.register')
router.post('/login', '#controllers/auth_controller.login').as('auth.login')
router.delete('/logout', '#controllers/auth_controller.logout').as('auth.logout').middleware([AuthMiddleware])
router.get('/me', '#controllers/auth_controller.me').as('auth.me').middleware([AuthMiddleware])

router.group(() => {
  router.get('/', '#controllers/movies_controller.index')
  router.post('/', '#controllers/movies_controller.store')
  router.get('/:id', '#controllers/movies_controller.show')
  router.put('/:id', '#controllers/movies_controller.update')
  router.delete('/:id', '#controllers/movies_controller.destroy')
}).prefix('api/v1/movies').middleware([AuthMiddleware])

router.group(() => {
  router.get('/', '#controllers/genres_controller.index')
  router.get('/:id', '#controllers/genres_controller.show')
}).prefix('api/v1/genres').middleware([AuthMiddleware])

router.get('/api/v1/memberships', '#controllers/memberships_controller.index')
router.post('/api/v1/memberships/subscribe', '#controllers/memberships_controller.subscribe').middleware([AuthMiddleware])
