import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ expenses }) {
  const categoryData = {};

  expenses.forEach((expense) => {
    if (categoryData[expense.category]) {
      categoryData[expense.category] += Number(expense.amount);
    } else {
      categoryData[expense.category] = Number(expense.amount);
    }
  });

  const data = {
    labels: Object.keys(categoryData),

    datasets: [
      {
        data: Object.values(categoryData),

        backgroundColor: [
          "#6366F1",
          "#8B5CF6",
          "#EC4899",
          "#F59E0B",
          "#10B981",
        ],

        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl shadow-xl mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">
        Expense Analytics
      </h2>

      <div className="max-w-md mx-auto">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default PieChart;