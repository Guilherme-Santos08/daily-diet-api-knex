import { KnexUsersRepository } from '@/repositories/knex/knex-users-repository'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  const usersRepository = new KnexUsersRepository()
  const registerUseCase = new AuthenticateUseCase(usersRepository)

  return registerUseCase
}
