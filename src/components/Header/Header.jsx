import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-emerald-700 mb-20 text-white relative z-[1] after:absolute after:content-[''] after:z-[-1] after:left-[50%] after:-bottom-[50px] after:translate-x-[-50%] after:h-[150px] after:w-[150px] after:bg-[url('/mosque.png')] after:rotate-180 after:bg-cover">
      <div className="container px-4 mx-auto py-2">
        <div className="flex items-center justify-between">
          <div></div>
          <Link to="/" className="text-center">
            <h3 className="font-bold text-xl lg:text-2xl">القرآن</h3>
            <h3 className="font-bold text-xl lg:text-2xl uppercase mt-1">
              Al-quran
            </h3>
          </Link>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
