import { formatValue } from "../utils/formatValue";

const CountryPicker = ({ availableCountries, chooseACountry }) => {
  return (
    <form onSubmit={chooseACountry}>
      <label htmlFor="countryPicker">Pick a country for data: </label>
      <select name="countryPicker" id="countryPicker">
        {Object.values(availableCountries).map((country) => {
          return (
            <option key={country} value={country}>
              {formatValue(country)}
            </option>
          );
        })}
      </select>
      <button type="submit">Select</button>
    </form>
  );
};

export default CountryPicker;
