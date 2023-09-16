import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsGrid1X2 } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

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
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 mb-10">
          <Link to="/" className="font-bold text-slate-700 ">
            Home
          </Link>
          <span>/</span>
          <Link to="/" className="font-bold text-emerald-700 underline ">
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
        <div className="border  shadow-md">
          <h3 className="bg-emerald-700 text-2xl uppercase font-serif tracking-widest text-white text-center p-3">
            {surah?.name}
          </h3>
          <div className="flex flex-col  gap-3 p-10 ">
            {versePairs?.map(({ verse1, verse2 }, i) => (
              <div key={i} className="even:bg-gray-100 p-5">
                <h2 className="text-right mb-4 text-xl">{verse1}</h2>
                <h2 className="text-xl text-slate-800">{verse2}</h2>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-5">
          <div className="border  shadow-md">
            <h3 className="bg-emerald-700 text-2xl uppercase font-serif tracking-widest text-white text-center p-3">
              Arabic
            </h3>
            <div className="flex flex-col items-end gap-3 p-10">
              {surah != undefined &&
                Object.keys(surah?.verse).map((key, i) => (
                  <h1 className="" key={key}>
                    {surah?.verse[key]}
                    <span className=" text-emerald-700 font-bold ml-2 border-2 border-emerald-700 text-xs h-6 w-8 rounded-full text-center inline-flex items-center justify-center ">
                      {i + 1}
                    </span>
                  </h1>
                ))}
            </div>
          </div>

          <div className="border shadow-md">
            <h3 className="bg-emerald-700 text-2xl uppercase font-serif tracking-widest text-white text-center p-3">
              English
            </h3>
            <div className="flex flex-col  gap-3  p-10 ">
              {surahEn != undefined &&
                Object.keys(surahEn?.verse).map((key, i) => (
                  <h1 className="" key={key}>
                    <span className=" text-emerald-700 font-bold mr-2 border-2 border-emerald-700 text-xs h-6 w-8 rounded-full text-center inline-flex items-center justify-center ">
                      {i + 1}
                    </span>
                    {surahEn?.verse[key]}
                  </h1>
                ))}
            </div>
          </div>
        </div>
      )}
      {/* */}
    </div>
  );
};

export default SurahDetail;
