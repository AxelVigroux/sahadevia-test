import axios from "axios";

const iaxios = axios.create({
  baseURL: "http://localhost:5001/api",
});

iaxios.defaults.responseType = "json";

export default iaxios;
