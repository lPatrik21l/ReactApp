import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../utils/fetchData";
import { Loader } from "../../Loader/Loader";

const EconomicDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["economicData"],
    queryFn: () =>
      fetchData(
        "https://brains.tradingeconomics.com/v2/search/wb,fred,comtrade?q=thailand&pp=15&p=0&_=1557934352427&stance=2"
      ),
    staleTime: 20 * 60 * 1000,
  });
  const formattedId = id.replace(/-/g, " ");
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>There was a problem with fetching, please come back later</p>;
  }
  const objData = Object.entries(data.hits).find(
    (d) => d[1].name === formattedId
  );

  const detailObj = objData[1];
  console.log(detailObj);
  return (
    <div>
      <h2>Detail for {id}</h2>
      <h4>{detailObj.name}</h4>
    </div>
  );
};

export default EconomicDetails;
