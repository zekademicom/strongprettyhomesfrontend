import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getAgent = (id) => {
    return axios.get(`${API_URL}/agent/${id}`);
  };
  export {getAgent};
  