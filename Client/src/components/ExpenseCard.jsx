import { FaTrash } from "react-icons/fa";
import API from "../services/api";
import { motion } from "framer-motion";

function ExpenseCard({ expense, fetchExpenses }) {
  const deleteExpense = async () => {
    await API.delete(`/expenses/${expense._id}`);

    fetchExpenses();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white/10 backdrop-blur-lg border border-white/10 p-5 rounded-2xl flex justify-between items-center shadow-lg"
    >
      <div>
        <h3 className="text-xl font-semibold text-white">
          {expense.title}
        </h3>

        <p className="text-gray-300 mt-1">
          {expense.category}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-2xl font-bold text-indigo-400">
            ${expense.amount}
          </p>
        </div>

        <button
          onClick={deleteExpense}
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl transition-all"
        >
          <FaTrash />
        </button>
      </div>
    </motion.div>
  );
}

export default ExpenseCard;