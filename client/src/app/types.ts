export type Invoice = {
  id: number
  vendor_name: string
  amount: number
  due_date: string
  user_id: number
  paid: boolean
  description: string
}

export type User = {
  id?: number
  email?: string
  name?: string
  access_token?: string
}
