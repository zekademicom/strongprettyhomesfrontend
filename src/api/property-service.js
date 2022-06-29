import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getProperties = () => {
  return axios.get(`${API_URL}/property/visitors/all`); //postmanden baktik
};
const getProperty = (id) => {
  return axios.get(`${API_URL}/property/visitors/${id}`);
};

const getSearchProperties = (values) => {
  const {
    type,
    category,
    minPrice,
    maxPrice,
    bedrooms,
    bathrooms,
    loca,
    country,
    city,
    district,
  } = values;

  return axios.get(
    `${API_URL}/property/search?type=${type}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&location=${loca}&country=${country}&city=${city}&district=${district}`
  );
};

export { getProperties, getProperty, getSearchProperties };
