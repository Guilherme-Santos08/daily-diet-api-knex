import fastify from 'fastify'
import { userRoutes } from './use-cases/user/route'

export const app = fastify()

app.register(userRoutes)
