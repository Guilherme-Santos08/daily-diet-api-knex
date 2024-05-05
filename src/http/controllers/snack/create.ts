import { makeCreateSnackUseCase } from '@/use-cases/factories/make-create-snack-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createSnackBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    insideDiet: z.boolean().default(false),
  })

  const { name, description, insideDiet } = createSnackBodySchema.parse(
    request.body,
  )

  const createSnackUseCase = makeCreateSnackUseCase()

  await createSnackUseCase.execute({
    name,
    description,
    insideDiet,
    userId: request.user.sub,
  })

  return reply.status(201).send()
}
