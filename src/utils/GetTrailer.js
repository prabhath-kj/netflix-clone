import { API_KEY } from "../constants/Constant";
import Axios from "./Axios";

export default GetTrailer = (id, SetyoutubeId) => {
  Axios.get("movie/" + id + "/videos?api_key=" + API_KEY + "&language=en-US")
    .then((data) => {
      SetyoutubeId(data?.data?.results[0]?.key);
    })
    .catch((err) => {
      console.error(err);
    });
};
