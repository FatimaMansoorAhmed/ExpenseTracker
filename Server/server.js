const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

// 1. Middlewares (Inka Top par hona lazmi hai!)
app.use(cors()); // Is se Frontend-Backend connect honge
app.use(express.json());

// 2. Test Root Route (Optional: 'Cannot GET /' ko fix karne ke liye)
app.get("/", (req, res) => {
  res.send("Backend Server Running Successfully!");
});

// 3. API Routes
app.use("/api/expenses", expenseRoutes);

// 4. MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// 5. Local Server Running (Aapke local system ke liye)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// 6. Export app (Vercel serverless functions ke liye lazmi hai)
module.exports = app;