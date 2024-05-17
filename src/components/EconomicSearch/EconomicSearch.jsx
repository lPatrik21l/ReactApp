import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../utils/fetchData";
import { Loader } from "../../Loader/Loader";

const EconomicSearch = () => {
  const navigate = useNavigate();
  //query
  const { data, error, isLoading } = useQuery({
    queryKey: ["economicData"],
    queryFn: () =>
      fetchData(
        "https://brains.tradingeconomics.com/v2/search/wb,fred,comtrade?q=thailand&pp=15&p=0&_=1557934352427&stance=2"
      ),
    staleTime: 20 * 60 * 1000,
  });
  //fnc redirect
  const redirectToDetail = (detail) => {
    navigate(`${detail}`);
  };

  //content
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>There was a problem with fetching, please come back later</p>;
  }

  const objData = Object.entries(data.hits);
  console.log(objData);
  return (
    <div>
      {objData.map((d) => {
        const { name, esID, currency, category, frequency } = d[1];
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
  );
};

export default EconomicSearch;
