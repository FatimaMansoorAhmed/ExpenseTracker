import { useEffect, useState } from "react";

import API from "./services/api";

import Navbar from "./components/Navbar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryCard from "./components/SummaryCard";
import CategoryFilter from "./components/CategoryFilter";
import PieChart from "./components/PieChart";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");

  const fetchExpenses = async () => {
    const res = await API.get("/expenses");

    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter(
          (expense) => expense.category === filter
        );

  const total = filteredExpenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  return (
    <div className="min-h-screen bg-[#0F172A] p-6">
      <div className="max-w-7xl mx-auto">
        <Navbar />

        <SummaryCard total={total} />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ExpenseForm fetchExpenses={fetchExpenses} />

            <CategoryFilter
              filter={filter}
              setFilter={setFilter}
            />

            <ExpenseList
              expenses={filteredExpenses}
              fetchExpenses={fetchExpenses}
            />
          </div>

          <div>
            <PieChart expenses={filteredExpenses} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;