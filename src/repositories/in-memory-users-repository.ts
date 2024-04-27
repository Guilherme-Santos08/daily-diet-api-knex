import { User } from '@/@types/user'

export class InMemoryUsersRepository {
  public users: User[] = []

  async create(data: User) {
    this.users.push(data)
  }
}
