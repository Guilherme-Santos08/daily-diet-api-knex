import { FastifyInstance } from 'fastify'
import { create } from './create'

export async function snacksRoutes(app: FastifyInstance) {
  app.post('/snacks', create)
}
