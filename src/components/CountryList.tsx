import CountryCard from "./CountryCard";
import { Country } from "../types/Countries";

interface Props {
  title: string;
  countries: Country[];
  toogleCountry: (area: number) => void;
}

const CountryList = ({ title, countries, toogleCountry }: Props) => {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center m-4">{title}</h1>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4">
          {countries.map((country) => (
            <CountryCard
              key={country.name.common}
              country={country}
              toogleCountry={toogleCountry}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default CountryList;
