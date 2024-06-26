import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import "./index.css";
import { CountriesApi } from "./api/CountriesApi";

interface Country {
  name: {
    common: string;
  };
  region: string;
  flags: {
    png: string;
  };
  isdone: boolean;
  area: number;
}

const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await CountriesApi();
        console.log(data);
        setCountries(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getCountries();
  }, []);

  const toogleCountry = (area: number) => {
    setCountries(
      countries.map((country) =>
        country.area === area
          ? { ...country, isdone: !country.isdone }
          : country
      )
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  const favoriteCountry = countries.filter((country) => country.isdone);
  const oneCountry = countries.filter((country) => !country.isdone);

  return (
    <>
      {/* 좋아하는 나라 */}
      <CountryList
        title="좋아하는 나라"
        countries={favoriteCountry}
        toogleCountry={toogleCountry}
      />
      ;{/* 나라 */}
      <CountryList
        title="나라"
        countries={oneCountry}
        toogleCountry={toogleCountry}
      />
      ;
    </>
  );
};

export default App;
