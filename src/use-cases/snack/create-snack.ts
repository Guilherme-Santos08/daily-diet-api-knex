import { Snack } from '@/@types/snack'
import { SnackRepository } from '@/repositories/snack-repository'

interface SnackCreateUseCaseRequest {
  userId: string
  name: string
  description: string
  insideDiet: boolean
}

interface SnackCreateUseCaseResponse {
  snack: Snack
}

export class SnackCreateUseCase {
  constructor(private snackRepository: SnackRepository) { }

  async execute({
    name,
    description,
    userId,
    insideDiet,
  }: SnackCreateUseCaseRequest): Promise<SnackCreateUseCaseResponse> {
    const snack = await this.snackRepository.create({
      name,
      description,
      insideDiet,
      user_id: userId,
    })

    return {
      snack,
    }
  }
}
