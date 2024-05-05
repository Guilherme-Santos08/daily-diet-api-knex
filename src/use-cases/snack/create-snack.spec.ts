import { beforeEach, describe, expect, it } from 'vitest'

import { InMemorySnackRepository } from '@/repositories/in-memory/in-memory-snack-repository'
import { SnackCreateUseCase } from './create-snack'

let snackRepository: InMemorySnackRepository
let sut: SnackCreateUseCase

describe('User be able create snack', async () => {
  beforeEach(() => {
    snackRepository = new InMemorySnackRepository()
    sut = new SnackCreateUseCase(snackRepository)
  })

  it('should be able to create snack', async () => {
    const { snack } = await sut.execute({
      name: 'Arroz',
      description: 'Arroz de forno',
      insideDiet: false,
      userId: 'user-01',
    })

    expect(snack.id).toEqual(expect.any(String))
  })
})
