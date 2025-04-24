export interface User {
  id?: number;
  email: string;
  name?: string;
  password: string;
}

export interface Invoice {
  id: number;
  vendor_name: string;
  amount: number;
  due_date: string;
  description: string;
  user_id: number;
  paid: boolean;
}
