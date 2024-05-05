import { KnexSnackRepository } from '@/repositories/knex/knex-snack-repository'
import { SnackCreateUseCase } from '../snack/create-snack'

export function makeCreateSnackUseCase() {
  const snackRepository = new KnexSnackRepository()
  const useCase = new SnackCreateUseCase(snackRepository)

  return useCase
}
