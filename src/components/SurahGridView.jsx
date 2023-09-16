const SurahGridView = ({ surahEn, surah }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-5">
      <div className="border shadow-md">
        <h3 className="bg-emerald-700 text-2xl uppercase font-serif tracking-widest text-white text-center p-3">
          Arabic
        </h3>
        <div className="flex flex-col items-end gap-3 p-5 lg:p-10">
          {surah != undefined &&
            Object.keys(surah?.verse).map((key, i) => (
              <h1 className="flex items-start" key={key}>
                <span className="inline-block text-right">
                  {surah?.verse[key]}
                </span>
                <span className="flex-shrink-0 mt-1 text-emerald-700 font-bold ml-2 border-2 border-emerald-700 text-xs h-6 w-8 rounded-full text-center inline-flex items-center justify-center ">
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
        <div className="flex flex-col gap-3 p-5 lg:p-10 ">
          {surahEn != undefined &&
            Object.keys(surahEn?.verse).map((key, i) => (
              <h1 className="flex items-start" key={key}>
                <span className="flex-shrink-0 mt-1 text-emerald-700 font-bold mr-2 border-2 border-emerald-700 text-xs h-6 w-8 rounded-full text-center flex items-center justify-center ">
                  {i + 1}
                </span>
                {surahEn?.verse[key]}
              </h1>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SurahGridView;
