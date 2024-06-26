import axios from "axios";

export const CountriesApi = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  } catch (error) {
    console.error("컨트리 못 불러옴", error);
    throw error;
  }
};
