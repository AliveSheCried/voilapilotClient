export interface BankAccount {
  id: string;
  display_name: string;
  account_type: string;
  currency: string;
  account_number?: {
    number: string;
    sort_code?: string;
  };
  created_at: string;
  updated_at: string;
} 