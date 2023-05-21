import axios from "axios";
import { BASE_URL } from "../constants/Constant";

export default instance =axios.create({
  baseURL: BASE_URL,
});


