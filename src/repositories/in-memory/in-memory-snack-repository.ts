import { randomUUID } from 'node:crypto'
import { SnackRepository } from '../snack-repository'
import { Snack } from '@/@types/snack'

export class InMemorySnackRepository implements SnackRepository {
  public items: Snack[] = []

  async create(data: Snack) {
    const snack = {
      id: randomUUID(),
      name: data.name,
      description: data.description,
      user_id: data.user_id,
      insideDiet: data.insideDiet,
    }

    this.items.push(snack)

    return snack
  }
}
