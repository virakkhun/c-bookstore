import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = `${
  import.meta.env.VITE_BASE_URL
}/*`;
