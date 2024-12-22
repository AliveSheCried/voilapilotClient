import BankAccountsDisplay from "@/components/bank/BankAccountsDisplay"

export default function AccountsPage() {
  // In a real application, you would fetch this data from an API
  const accounts = []

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Bank Accounts</h1>
      <BankAccountsDisplay accounts={accounts} />
    </div>
  )
}

