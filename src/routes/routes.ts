import { FastifyInstance } from 'fastify';
import userRoutes from './users/UserController'

export function appRoutes(routes: FastifyInstance) {
  return (
    routes.post('/users', userRoutes.create),
    routes.get('/users', userRoutes.list),
    routes.patch('/users/:id', userRoutes.update),
    routes.delete('/users/:id', userRoutes.delete)
    )
}