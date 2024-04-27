import { User } from '@/@types/user'
import { knex } from '@/database'
import { randomUUID } from 'node:crypto'
import { UsersRepository } from '../users-repository'

export class KnexUsersRepository implements UsersRepository {
  async findByEmail(email: string) {
    const user = await knex('user').where('email', email).first()

    return user || null
  }

  async create(data: User) {
    await knex('user').insert({
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
    })

    const createdUser = {
      id: data.id,
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
    }

    return createdUser
  }
}
