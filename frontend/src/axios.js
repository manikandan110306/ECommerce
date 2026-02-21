import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecommerce-backend-2qkl.onrender.com"
});

export default instance;