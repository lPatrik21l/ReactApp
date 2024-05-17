import { Link, useNavigation } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-white rounded-lg shadow mt-10 dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-center">
          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-500">
            <li>
              <Link
                to="https://tradingeconomics.com/"
                className="hover:underline me-4 md:me-6"
              >
                HomePage
              </Link>
            </li>
            <li>
              <Link
                to="https://tradingeconomics.com/privacy-policy.aspx"
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="https://tradingeconomics.com/calendar"
                className="hover:underline me-4 md:me-6"
              >
                Calendar
              </Link>
            </li>
            <li>
              <Link
                to="https://tradingeconomics.com/about-te.aspx"
                className="hover:underline"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © {date}{" "}
          <Link to="https://tradingeconomics.com/" className="hover:underline">
            Trading Economics
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
