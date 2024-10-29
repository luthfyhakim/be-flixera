import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import { HttpContext } from '@adonisjs/core/http'

const MoviesController = () => import('#controllers/movies_controller')
const GenresController = () => import('#controllers/genres_controller')
const AuthController = () => import('#controllers/auth_controller')
const MembershipController = () => import('#controllers/memberships_controller')

router.get('/', async ({ response }: HttpContext) => {
  return response.ok({
    message: 'Welcome to the API Movie Flixera'
  })
})

router.post('/register', [AuthController, 'register']).as('auth.register')
router.post('/login', [AuthController, 'login']).as('auth.login')
router.delete('/logout', [AuthController, 'logout']).as('auth.logout').use(middleware.auth())
router.get('/me', [AuthController, 'me']).as('auth.me').use(middleware.auth())

router.group(() => {
  router.get('/', [MoviesController, 'index'])
  router.get('/list', [MoviesController, 'list'])
  router.get('/genre', [MoviesController, 'getByGenre'])
  router.post('/', [MoviesController, 'store'])
  router.get('/:id', [MoviesController, 'show'])
  router.put('/:id', [MoviesController, 'update'])
  router.delete('/:id', [MoviesController, 'destroy'])
}).prefix('api/v1/movies')

router.group(() => {
  router.get('/', [GenresController, 'index'])
  router.get('/:id', [GenresController, 'show'])
}).prefix('api/v1/genres')

router.get('/api/v1/memberships', [MembershipController, 'index']).use(middleware.auth())
router.post('/api/v1/memberships/subscribe', [MembershipController, 'subscribe']).use(middleware.auth())
