import axios from "axios";
import apiConf from "../utils/apiConfig";

// setting default api options
export default axios.create({
  baseURL: apiConf.API_ENDPOINT,
});
