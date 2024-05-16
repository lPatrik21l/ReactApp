import { useLoaderData, useParams } from "react-router-dom";

const EconomicDetails = () => {
  const { id } = useParams();
  const formattedId = id.replace(/-/g, " ");
  const data = useLoaderData();
  const record = data.hits.find((item) => item.name === formattedId);
  console.log(record);
  return (
    <div>
      <h2>Detail for {id}</h2>
      {/* Tu môžete pridať ďalšie logiku na načítanie a zobrazenie detailov */}
    </div>
  );
};

export default EconomicDetails;
