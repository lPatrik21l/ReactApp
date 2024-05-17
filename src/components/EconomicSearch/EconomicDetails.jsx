import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../utils/fetchData";
import { Loader } from "../../Loader/Loader";
import Text from "./Text";
import DetailData from "./DetailData";

const EconomicDetails = () => {
  //ziskat id pre detail. Id =
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["economicData"],
    queryFn: () =>
      fetchData(
        "https://brains.tradingeconomics.com/v2/search/wb,fred,comtrade?q=thailand&pp=16&p=0&_=1557934352427&stance=2"
      ),
    staleTime: 1 * 24 * 60 * 60 * 1000,
  });
  //nahradenie pomlcky(-) medzerou(" ")
  const formattedId = id.replace(/-/g, " ");
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>There was a problem with fetching, please come back later</p>;
  }
  //najst v objekte konkretne data
  const objData = Object.entries(data.hits).find(
    (d) => d[1].name === formattedId
  );

  //ziskanie detailu
  const detailObj = objData[1];

  return (
    <div>
      <DetailData detailObj={detailObj}>
        <Text />
      </DetailData>
    </div>
  );
};

export default EconomicDetails;
