import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center flex items-center flex-col justify-center h-[300px]">
      <h1 className="text-8xl text font-bold text-emerald-700">404</h1>
      <p className="text-xl my-4">
        {'"'}Page Not Found{'"'}
      </p>
      <Link
        to="/"
        className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full uppercase tracking-widest"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
