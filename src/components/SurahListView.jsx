const SurahListView = ({ surah, versePairs }) => {
  return (
    <div className="border shadow-md">
      <h3 className="bg-emerald-700 text-2xl uppercase font-serif tracking-widest text-white text-center p-3">
        {surah?.name}
      </h3>
      <div className="flex flex-col gap-1 lg:gap-3 p-5 lg:p-10 ">
        {versePairs?.map(({ verse1, verse2 }, i) => (
          <div key={i} className="even:bg-gray-100 p-5 odd:px-0">
            <h2 className="text-right mb-2 lg:mb-4 lg:text-xl">{verse1}</h2>
            <h2 className="lg:text-xl text-slate-800">{verse2}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurahListView;
