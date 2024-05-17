import { formatValue } from "../../utils/formatValue";

const CountryPicker = ({ availableCountries, chooseACountry }) => {
  //vyuzit localstorage a vybrat krajinu ktrej data sa zobrazia pomocou select a map options
  const countryFromLocalStorage = localStorage.getItem("country");

  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={chooseACountry}
        className="flex items-center space-x-4 mt-4"
      >
        <label
          htmlFor="countryPicker"
          className="block text-sm font-medium text-gray-700"
        >
          Pick a country for data:{" "}
        </label>
        <select
          name="countryPicker"
          id="countryPicker"
          defaultValue={countryFromLocalStorage || "sweden"}
          className="block w-64 px-3 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {Object.values(availableCountries).map((country) => {
            return (
              <option key={country} value={country}>
                {formatValue(country)}
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          className="text-white bg-lime-700 font-medium rounded-full text-sm px-5 py-2.5 active:bg-gray-900"
        >
          Select
        </button>
      </form>
    </div>
  );
};

export default CountryPicker;
