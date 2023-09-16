import { useEffect, useState } from "react";
import Surah from "../components/home/Surah";
import Loading from "../components/home/Loading";

const Home = () => {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(false);

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

  let content;
  content =
    surahs.length > 0 ? (
      <div className="text-center grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {surahs?.map((surah, i) => (
          <Surah key={i} surah={surah} />
        ))}
      </div>
    ) : loading ? (
      <Loading />
    ) : (
      <h1>No Data Found!</h1>
    );

  return <div className="container px-4 mx-auto ">{content}</div>;
};

export default Home;
