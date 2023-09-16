import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsGrid1X2 } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import SurahListView from "../components/SurahListView";
import SurahGridView from "../components/SurahGridView";

const SurahDetail = () => {
  const { id } = useParams();
  const [surah, setSurah] = useState();
  const [surahEn, setSurahEn] = useState();
  const [view, setView] = useState("list");

  document.title = `Surah ${surah?.name} | Al-Quran`;

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_${id}.json`
    )
      .then((res) => res.json())
      .then((data) => setSurah(data));
  }, [id]);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/semarketir/quranjson/master/source/translation/en/en_translation_${id}.json`
    )
      .then((res) => res.json())
      .then((data) => setSurahEn(data));
  }, [id]);

  const versePairs = [];

  for (let i = 1; i <= surah?.count; i++) {
    const key = `verse_${i}`;
    const versePair = {
      verse1: surah?.verse[key],
      verse2: surahEn?.verse[key],
    };
    versePairs.push(versePair);
  }

  return (
    <div className="container  mx-auto ">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-2 ">
          <Link to="/" className="font-bold text-slate-700 ">
            Home
          </Link>
          <span>/</span>
          <Link to="/" className="font-bold text-emerald-700 capitalize">
            {surah?.name}
          </Link>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`${
              view == "grid" && "bg-emerald-700 text-white"
            } border border-emerald-700 p-2 text-emerald-700 font-bold rounded-md`}
          >
            <BsGrid1X2 />
          </button>
          <button
            onClick={() => setView("list")}
            className={`${
              view == "list" && "bg-emerald-700 text-white"
            } border border-emerald-700 p-2 text-emerald-700 font-bold rounded-md`}
          >
            <FaListUl />
          </button>
        </div>
      </div>

      {view == "list" ? (
        <SurahListView versePairs={versePairs} surah={surah} />
      ) : (
        <SurahGridView surah={surah} surahEn={surahEn} />
      )}
    </div>
  );
};

export default SurahDetail;
