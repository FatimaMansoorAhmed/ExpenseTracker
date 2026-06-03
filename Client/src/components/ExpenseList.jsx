import ExpenseCard from "./ExpenseCard";

function ExpenseList({ expenses, fetchExpenses }) {
  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <ExpenseCard
          key={expense._id}
          expense={expense}
          fetchExpenses={fetchExpenses}
        />
      ))}
    </div>
  );
}

export default ExpenseList;