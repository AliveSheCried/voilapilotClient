import BankTransactionsDisplay from "@/components/bank/BankTransactionsDisplay"

export default function TransactionsPage() {
  // In a real application, you would fetch this data from an API
  const transactions = []

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Transactions</h1>
      <BankTransactionsDisplay transactions={transactions} />
    </div>
  )
}

