import fastify from 'fastify'
import { snacksRoutes } from './http/controllers/snack/route'
import { userRoutes } from './http/controllers/user/route'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(userRoutes)
app.register(snacksRoutes)
