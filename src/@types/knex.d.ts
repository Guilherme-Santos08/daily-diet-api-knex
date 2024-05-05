// eslint-disable-next-line
import { Knex } from 'knex'
// ou faça apenas:
// import 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    user: {
      id: string
      name: string
      email: string
      password_hash: string
      created_at: Date
    }
    snack: {
      id: string
      name: string
      description: string
      insideDiet: boolean
      created_at: Date
      updated_at: Date
      user_id: string
    }
  }
}
