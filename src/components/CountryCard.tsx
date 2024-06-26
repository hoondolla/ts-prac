import React from "react";

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

interface Props {
  country: Country;
  toogleCountry: (area: number) => void;
}

const CountryCard: React.FC<Props> = ({ country, toogleCountry }) => {
  const { name, region, flags, isdone } = country;

  const handleClick = () => {
    toogleCountry(country.area);
  };

  return (
    <>
      {/* isdone(좋아하는 나라) 이 true 일 때 */}
      {isdone && (
        <li
          className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 hover:bg-gray-700 cursor-pointer transition-all duration-300 ease-in-out"
          onClick={handleClick}
        >
          <img
            src={flags.png}
            alt={`${name.common} flag`}
            className="w-16 h-16 object-cover rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">{name.common}</h2>
            <p className="text-gray-500">Region: {region}</p>
          </div>
        </li>
      )}

      {/* isdone(좋아하는 나라) 이 false 일 때 */}

      {!isdone && (
        <li
          className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 hover:bg-gray-700 cursor-pointer transition-all duration-300 ease-in-out"
          onClick={handleClick}
        >
          <img
            src={flags.png}
            alt={`${name.common} flag`}
            className="w-16 h-16 object-cover rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">{name.common}</h2>
            <p className="text-gray-500">Region: {region}</p>
          </div>
        </li>
      )}
    </>
  );
};

export default CountryCard;
