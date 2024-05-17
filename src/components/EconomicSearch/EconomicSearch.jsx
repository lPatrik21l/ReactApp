import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../utils/fetchData";
import { Loader } from "../../Loader/Loader";
import HeaderBorderWrapper from "./HeaderBorderWrapper";

const EconomicSearch = () => {
  const navigate = useNavigate();
  //query
  const { data, error, isLoading } = useQuery({
    queryKey: ["economicData"],
    queryFn: () =>
      fetchData(
        "https://brains.tradingeconomics.com/v2/search/wb,fred,comtrade?q=thailand&pp=16&p=0&_=1557934352427&stance=2"
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
  return (
    <HeaderBorderWrapper heading={"Economic Data"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {objData.map((d) => {
          const { name, esID, currency, category, frequency } = d[1];
          const formattedUrl = name.replace(/\s/g, "-");
          return (
            <div
              key={esID}
              className="p-4 border border-gray-200 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {name}
              </h2>
              <p className="text-base text-gray-600 mb-1">
                Currency: {currency}
              </p>
              <p className="text-base text-gray-600 mb-1">
                Category: {category[0]}
              </p>
              <p className="text-base text-gray-600 mb-4">
                Frequency: {frequency}
              </p>
              <button
                onClick={() => redirectToDetail(formattedUrl)}
                className="text-white bg-lime-700 font-medium rounded-full text-sm px-5 py-2.5 active:bg-gray-900"
              >
                Read More
              </button>
            </div>
          );
        })}
      </div>
    </HeaderBorderWrapper>
  );
};

export default EconomicSearch;
