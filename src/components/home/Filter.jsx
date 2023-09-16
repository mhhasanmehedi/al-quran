const Filter = ({
  handleSearchChange,
  ascending,
  sortAscending,
  sortDescending,
  search,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 items-start md:items-center justify-between mb-10">
      <form>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search Surah"
          className="border p-3 w-[300px] outline-none border-emerald-700 rounded-md"
        />
      </form>
      <button
        onClick={ascending ? sortDescending : sortAscending}
        className="border bg-emerald-700 text-white p-2 w-[150px] text-center rounded-md"
      >
        Sort {ascending ? "Descending" : "Ascending"}
      </button>
    </div>
  );
};

export default Filter;
