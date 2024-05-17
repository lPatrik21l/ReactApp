import useFetchApi from "../../utils/useFetchApi";
import TableBody from "./TableBody";

const TableHead = ({ country }) => {
  //unique api key
  const apiKey = "c9a1bd370fbe471:z5o4rjggr5p0bd7";
  const url = `https://api.tradingeconomics.com/calendar/events/country/${country}?c=${apiKey}`;
  const { data, error, loading } = useFetchApi(url);
  console.log(country);
  console.log(url);
  let formattedCountry = country.charAt(0).toUpperCase() + country.slice(1);

  return (
    <div className="relative overflow-x-auto shadow-md  sm:rounded-lg mt-6 mr-5 ml-5 ">
      <h1 className="mb-10  text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Table for the Economic Data
      </h1>
      <table className="w-full text-sm text-left justify-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-lg text-gray-900 uppercase dark:text-gray-200 border-b-4 border-gray-300 dark:border-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Category for {formattedCountry}
            </th>
            <th scope="col" className="px-6 py-3">
              Event
            </th>
          </tr>
        </thead>
        <TableBody data={data} error={error} loading={loading} />
      </table>
    </div>
  );
};

export default TableHead;
