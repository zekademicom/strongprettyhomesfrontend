import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getProperties = () => {
  return axios.get(`${API_URL}/property/visitors/all`); //postmanden baktik
};
const getProperty = (id) => {
  return axios.get(`${API_URL}/property/visitors/${id}`);
};

const getSearchProperties = (searchModel) => {
  const {status, category, lowPrice, highPrice,bedrooms, bathrooms, location, country, city, district }= searchModel;
 
  return axios.get(`${API_URL}/property/search?status=${status}&category=${category}&lowPrice=${lowPrice}&
  highPrice=${highPrice}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&location=${location}&country=${country}&
  &city=${city}&district=${district}`);

}

export { getProperties, getProperty, getSearchProperties };
