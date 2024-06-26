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
  isdone: boolean; //좋아하는 나라 여부
  area: number; // id 값 대신 사용
}

const App = () => {
  const [countries, setCountries] = useState<Country[]>([]); //국가 목록 상태
  const [loading, setLoading] = useState<boolean>(true); //loading 상태

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
  //컴포넌트가 처음 렌더링될 때 getCountries 함수를 호출
  //CountriesApi를 호출하여 국가 데이터를 가져와 countries 상태를 업데이트
  //데이터 로딩이 끝나면 loading 상태를 false로 설정

  const toogleCountry = (area: number) => {
    setCountries(
      countries.map((country) =>
        country.area === area
          ? { ...country, isdone: !country.isdone }
          : country
      )
    );
  };
  //toogleCountry 함수는 국가의 isdone 상태를 토글
  //국가의 면적(area)을 기준 (id 값이 없어서 area 선택) 으로 해당 국가를 찾아 isdone 값을 반전시킵니다.
  //setCountries를 사용하여 countries 상태를 업데이트합니다. (todolist 로직 응용)

  if (loading) {
    return <div>Loading...</div>;
  }
  //loading 이 true 이면 Loading... 을 화면에 표시함 (로딩 중 공백보다 로딩중이라는것을 알려주기 위함(사용자경험개선))

  const favoriteCountry = countries.filter((country) => country.isdone); //isdone (좋아하는나라) 가 true 인 국가들로 필터링
  const oneCountry = countries.filter((country) => !country.isdone); //isdone (좋아하는나라) 가 false (나라) 인 국가들로 필터링

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

//CountryList 컴포넌트를 두 번 렌더링
//하나는 (좋아하는 나라)를 다른 하나는 (나라) 를 표시함. 각각의 리스트에는 해당 국가 배열과 toogleCountry 함수를 전달

export default App;
