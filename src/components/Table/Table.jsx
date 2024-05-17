import { useEffect, useState } from "react";
import CountryPicker from "./CountryPicker";
import TableHead from "./TableHead";

const Table = () => {
  const countryFromLocalStorage = localStorage.getItem("country");
  const [country, setCountry] = useState(countryFromLocalStorage || "sweden");
  const availableCountries = {
    SWEDEN: "sweden",
    MEXICO: "mexico",
    THAILAND: "thailand",
  };
  console.log(country);
  console.log(countryFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("country", country);
  }, [country]);
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
