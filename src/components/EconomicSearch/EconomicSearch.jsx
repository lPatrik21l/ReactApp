import { useLoaderData, useNavigate } from "react-router-dom";
import useFetchApi from "../../utils/useFetchApi";

const EconomicSearch = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const redirectToDetail = (detail) => {
    console.log("clicked");
    navigate(`${detail}`);
  };
  if (data) console.log(data.hits);
  // const { data, loading, error } = useFetchApi(
  //   "https://brains.tradingeconomics.com/v2/search/wb,fred,comtrade?q=thailand&pp=15&p=0&_=1557934352427&stance=2"
  // );
  if (data) console.log(Object.entries(data.hits));
  return (
    <div>
      {/* <div>
        {error && (
          <p>
            Ooops, there waws problem with loading data, please try again later
          </p>
        )}
      </div>
      <div> {loading && <p>Loading data..</p>}</div> */}
      <div>
        {data &&
          Object.entries(data.hits).map((d, index) => {
            const { name, esID, currency, category, frequency, url } = d[1];
            const formattedUrl = name.replace(/\s/g, "-");
            return (
              <div key={esID}>
                <h2>{name}</h2>
                <p>Currency: {currency}</p>
                <p>Category: {category[0]}</p>
                <p>Frequency: {frequency}</p>
                <button onClick={() => redirectToDetail(formattedUrl)}>
                  {/* <Link to={`${formattedUrl}`}>Read More</Link> */}
                  Read More
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EconomicSearch;

export const loader = async () => {
  const response = await fetch(
    "https://brains.tradingeconomics.com/v2/search/wb,fred,comtrade?q=thailand&pp=15&p=0&_=1557934352427&stance=2"
  );
  if (!response.ok) {
    throw Error("Could not fetch the data");
  }
  const data = await response.json();
  return data;
};
