import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to={"/"}>
      <div className="max-w-3xl mx-auto text-center mt-4">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6 border-t-4 border-b-4 border-gray-600 py-4">
          TRADING ECONOMICS
        </h1>
      </div>
    </Link>
  );
};

export default Header;
