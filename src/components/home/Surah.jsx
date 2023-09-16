import { Link } from "react-router-dom";

const Surah = ({ surah }) => {
  const { index, titleAr, title, count } = surah || {};

  function removeLeadingZeros(integer) {
    let str = integer.toString();
    str = str.replace(/^0+/, "");
    const result = parseInt(str, 10);
    return result;
  }
  return (
    <Link
      to={`/surah/${removeLeadingZeros(index)}`}
      className="border shadow-lg rounded-sm p-5 text-slate-700 duration-300 cursor-pointer hover:bg-emerald-700 hover:text-gray-200 hover:scale-105"
    >
      <div className="h-14 w-14 bg-cover mx-auto flex items-center justify-center bg-[url('/circle.png')]">
        {removeLeadingZeros(index)}
      </div>
      <h1 className="font-bold my-1 text-xl">{titleAr}</h1>
      <h1 className="font-bold text-xl lg:text-2xl">{title}</h1>
      <p>{count} Ayahs</p>
    </Link>
  );
};

export default Surah;
