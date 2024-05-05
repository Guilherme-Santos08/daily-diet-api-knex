import { knex } from '@/database'
import { randomUUID } from 'node:crypto'
import { SnackRepository } from '../snack-repository'
import { Snack } from '@/@types/snack'

export class KnexSnackRepository implements SnackRepository {
  async create(data: Snack) {
    await knex('snack').insert({
      id: randomUUID(),
      name: data.name,
      description: data.description,
      user_id: data.user_id,
      insideDiet: data.insideDiet,
    })

    const createSnack = {
      id: data.id,
      name: data.name,
      description: data.description,
      user_id: data.user_id,
      insideDiet: data.insideDiet,
    }

    return createSnack
  }
}
