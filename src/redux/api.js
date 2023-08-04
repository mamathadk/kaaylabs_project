import axios from "axios";

const BASE_URL = "https://api.punkapi.com/v2/beers";

export const fetchBeers = async (page, perPage) => {
  const response = await axios.get(
    `${BASE_URL}?page=${page}&per_page=${perPage}`
  );
  return response.data;
};
