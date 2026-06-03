function CategoryFilter({ filter, setFilter }) {
  return (
    <div className="mb-6">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="bg-white/10 backdrop-blur-lg border border-white/10 text-white p-4 rounded-xl outline-none"
      >
        <option value="All">All Categories</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
}

export default CategoryFilter;