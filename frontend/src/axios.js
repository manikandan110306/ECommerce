import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecommerce-backend-2qkl.onrender.com",
  withCredentials: true
});

export default instance;