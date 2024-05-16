import useFetchApi from "../utils/useFetchApi";

const EconomicSearch = () => {
  const { data, loading, error } = useFetchApi(
    "https://brains.tradingeconomics.com/v2/search/wb,fred,comtrade?q=thailand&pp=15&p=0&_=1557934352427&stance=2"
  );
  if (data) console.log(Object.entries(data.hits));
  return (
    <div>
      <div>
        {error && (
          <p>
            Ooops, there waws problem with loading data, please try again later
          </p>
        )}
      </div>
      <div> {loading && <p>Loading data..</p>}</div>
      <div>
        {data &&
          Object.entries(data.hits).map((d, index) => {
            const { name, esID, currency, category, frequency } = d[1];
            return (
              <div key={esID}>
                <h2>{name}</h2>
                <p>Currency: {currency}</p>
                <p>Category: {category[0]}</p>
                <p>Frequency: {frequency}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EconomicSearch;
