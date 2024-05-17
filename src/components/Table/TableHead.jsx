import useFetchApi from "../../utils/useFetchApi";
import TableBody from "./TableBody";

const TableHead = ({ country }) => {
  const apiKey = "c9a1bd370fbe471:z5o4rjggr5p0bd7";
  const url = `https://api.tradingeconomics.com/calendar/events/country/${country}?c=${apiKey}`;
  const { data, error, loading } = useFetchApi(url);
  console.log(country);
  console.log(url);
  let formattedCountry = country.charAt(0).toUpperCase() + country.slice(1);

  return (
    <table>
      <thead>
        <tr className="columnHeaders">
          <th className="columnHeader ">Category for {formattedCountry}</th>
          <th className="columnHeader ">Event</th>
        </tr>
      </thead>
      <TableBody data={data} error={error} loading={loading} />
    </table>
  );
};

export default TableHead;
