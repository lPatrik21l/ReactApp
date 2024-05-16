import { useState } from "react";
import CountryPicker from "./CountryPicker";
import TableHead from "./TableHead";

const Table = () => {
  const [country, setCountry] = useState("sweden");
  const availableCountries = {
    SWEDEN: "sweden",
    MEXICO: "mexico",
    THAILAND: "thailand",
  };
  const chooseACountry = (e) => {
    e.preventDefault();
    const selectedCountry = e.target.elements.countryPicker.value;
    setCountry(() => selectedCountry);
  };
  return (
    <>
      <CountryPicker
        availableCountries={availableCountries}
        chooseACountry={chooseACountry}
      />
      <TableHead country={country} />
    </>
  );
};

export default Table;
