import { useState } from "react";
import API from "../services/api";

function ExpenseForm({ fetchExpenses }) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "Food",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/expenses", formData);

    setFormData({
      title: "",
      amount: "",
      category: "Food",
    });

    fetchExpenses();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md mb-6"
    >
      <h2 className="text-2xl font-bold mb-4">
        Add Expense
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Expense Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Entertainment</option>
        </select>
      </div>

      <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-all">
        Add Expense
      </button>
    </form>
  );
} // <--- THIS WAS MISSING

export default ExpenseForm;