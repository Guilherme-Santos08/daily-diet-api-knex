export interface Snack {
  id?: string
  name: string
  description: string
  insideDiet: boolean
  created_at?: Date
  updated_at?: Date
  user_id: string
}
