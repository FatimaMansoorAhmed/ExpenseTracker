import { FaWallet } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl px-8 py-5 flex justify-between items-center mb-8">
      <div className="flex items-center gap-3">
        <div className="bg-indigo-600 p-3 rounded-xl text-white text-xl">
          <FaWallet />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">
            Expense Tracker
          </h1>

          <p className="text-gray-300 text-sm">
            Smart Finance Dashboard
          </p>
        </div>
      </div>

      <button className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white px-5 py-2 rounded-xl font-medium">
        Dashboard
      </button>
    </nav>
  );
}

export default Navbar;