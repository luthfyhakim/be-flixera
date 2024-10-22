import MoviesController from '#controllers/movies_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.group(() => {
  router.get('/movies', [MoviesController, 'index'])
  router.post('/movies', [MoviesController, 'store'])
  router.get('/movies/:id', [MoviesController, 'show'])
  router.put('/movies/:id', [MoviesController, 'update'])
  router.delete('/movies/:id', [MoviesController, 'destroy'])
}).prefix('api/v1')
