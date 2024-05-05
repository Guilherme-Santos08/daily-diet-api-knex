import fastify from 'fastify'
import { snacksRoutes } from './http/controllers/snack/route'
import { userRoutes } from './http/controllers/user/route'

export const app = fastify()

app.register(userRoutes)
app.register(snacksRoutes)
