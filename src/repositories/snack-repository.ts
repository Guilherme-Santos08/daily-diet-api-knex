import { Snack } from '@/@types/snack'

export interface SnackRepository {
  create(data: Snack): Promise<Snack>
}
