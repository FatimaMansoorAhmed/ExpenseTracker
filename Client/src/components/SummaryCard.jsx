import { motion } from "framer-motion";
import { FaDollarSign } from "react-icons/fa";

function SummaryCard({ total }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-8 rounded-3xl shadow-2xl text-white mb-8 relative overflow-hidden"
    >
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>

      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-lg opacity-80">
            Total Spending
          </p>

          <h2 className="text-5xl font-bold mt-2">
            ${total}
          </h2>
        </div>

        <div className="bg-white/20 p-5 rounded-2xl text-3xl">
          <FaDollarSign />
        </div>
      </div>
    </motion.div>
  );
}

export default SummaryCard;