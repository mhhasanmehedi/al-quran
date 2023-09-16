import { useEffect, useState } from "react";
import Surah from "../components/home/Surah";
import Loading from "../components/home/Loading";
import Filter from "../components/home/Filter";

const Home = () => {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ascending, setAscending] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setSurahs(data);
        setLoading(false);
      });
  }, []);

  const sortAscending = () => {
    const sortedData = [...surahs].sort((a, b) => a.index - b.index);
    setSurahs(sortedData);
    setAscending(true);
  };

  const sortDescending = () => {
    const sortedData = [...surahs].sort((a, b) => b.index - a.index);
    setSurahs(sortedData);
    setAscending(false);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = surahs?.filter(({ title }) =>
    title.toLowerCase().includes(search.toLowerCase())
  );

  let content;
  content =
    surahs.length > 0 ? (
      <div className="text-center grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 lg:gap-5">
        {filteredData?.map((surah, i) => (
          <Surah key={i} surah={surah} />
        ))}
      </div>
    ) : loading ? (
      <Loading />
    ) : (
      <h1>No Data Found!</h1>
    );

  return (
    <div className="container px-4 mx-auto ">
      <Filter
        ascending={ascending}
        sortAscending={sortAscending}
        sortDescending={sortDescending}
        handleSearchChange={handleSearchChange}
        search={search}
      />
      {content}
    </div>
  );
};

export default Home;
