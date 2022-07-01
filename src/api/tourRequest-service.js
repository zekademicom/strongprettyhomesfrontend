import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;
 const isHomeAvailable = (dto) => {
  const { propertyId, tourRequestTime } = dto;
 return axios.get(
   `${API_URL}/tour/add?propertyId=${propertyId}&tourRequestTime=${tourRequestTime}`,
    { headers: authHeader() }
  );
 };

const makeTourRequest = (tour) => {
    const { propertyId } = tour;
    delete tour.propertyId;
  
    return axios.post(`${API_URL}/tour/add?propertyId=${propertyId}`, tour, {
      headers: authHeader(),
    });
  };
  export {makeTourRequest, isHomeAvailable};