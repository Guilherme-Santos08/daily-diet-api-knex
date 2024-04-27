import { KnexUsersRepository } from '@/repositories/knex/knex-users-repository'
import { RegisteruseCase } from '../register'

export function makeRegisterUseCase() {
  const usersRepository = new KnexUsersRepository()
  const registerUseCase = new RegisteruseCase(usersRepository)

  return registerUseCase
}
