import { KnexUsersRepository } from '@/repositories/knex/knex-users-repository'
import { RegisterUseCase } from '../user/register'

export function makeRegisterUseCase() {
  const usersRepository = new KnexUsersRepository()
  const registerUseCase = new RegisterUseCase(usersRepository)

  return registerUseCase
}
