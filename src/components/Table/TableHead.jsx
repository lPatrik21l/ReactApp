import useFetchApi from "../../hooks/useFetchApi";
import TableBody from "./TableBody";

const TableHead = ({ country }) => {
  //unique api key
  const apiKey = "c9a1bd370fbe471:z5o4rjggr5p0bd7";
  const url = `https://api.tradingeconomics.com/calendar/events/country/${country}?c=${apiKey}`;
  const { data, error, loading } = useFetchApi(url);
  let formattedCountry = country.charAt(0).toUpperCase() + country.slice(1);

  return (
    <div className="relative overflow-x-auto shadow-md  sm:rounded-lg mt-6 mr-5 ml-5 ">
      <h1 className="mb-10  text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
        Table for the Economic Data
      </h1>
      <table className="w-full text-sm text-left justify-center rtl:text-right text-gray-500 rounded-xl">
        <thead className="text-lg text-gray-900 uppercase border-b-4 border-transparent ">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-400 ">
              Category for {formattedCountry}
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-300">
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
