const Expense = require("../models/Expense");

// Add Expense
const addExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Expense
const deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Expense Deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Add this at the bottom of controllers/expenseController.js
module.exports = {
  addExpense,
  getExpenses,
  deleteExpense
};