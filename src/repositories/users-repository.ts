import { User } from '@/@types/user'

export interface UsersRepository {
  findByEmail(email: string): Promise<User | null>
  create(data: User): Promise<User>
}
