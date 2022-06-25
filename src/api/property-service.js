import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getProperties = () => {
  return axios.get(`${API_URL}property/visitors/all`);//postmanden baktik
};
const getProperty = (id) => {
  return axios.get(`${API_URL}property/visitors/${id}`);
};

export { getProperties, getProperty };