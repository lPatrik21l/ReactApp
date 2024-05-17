import { Link } from "react-router-dom";
import main from "../assets/undraw_all_the_data_re_hh4w.svg";
import Text from "./EconomicSearch/Text";

const Dashboard = () => {
  return (
    <div>
      {/* <h2>
         Please Pick a <span>Topic</span>
        </h2> */}
      <div className="flex flex-col items-center justify-center ">
        <p className="font-bold text-4xl mb-4 text-center">
          Please Pick a
          <span className="text-lime-700 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
            Topic
            <svg
              className="absolute -bottom-0.5 w-full max-h-1.5"
              viewBox="0 0 55 5"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                strokeWidth="2"
              ></path>
            </svg>
          </span>
        </p>
        <div className="mt-4 mb-8 flex space-x-4">
          <Link
            to={"table"}
            className="text-white bg-lime-600 font-medium rounded-full text-lg px-8 py-4 active:bg-gray-900"
          >
            Table
          </Link>
          <Link
            to={"economicSearch"}
            className="text-white bg-lime-500 font-medium rounded-full text-lg px-8 py-4 active:bg-gray-900"
          >
            Economic Search
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-10">
        <div className="flex-1 p-4  shadow-lg">
          <Text />
        </div>
        <img src={main} alt="all the data" className="w-1/2 h-auto" />
      </div>
    </div>
  );
};

export default Dashboard;
