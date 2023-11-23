import axios, { AxiosResponse } from "axios";
import { ENDPOINT, TOKEN } from "../constants";

const request = axios.create({
  baseURL: ENDPOINT,
  timeout: 10000,
  headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
});

request.interceptors.response.use(
  (response: AxiosResponse) => response,
  (err) => {
    // toast.error(err.response.data);
    console.log(err)

    return Promise.reject(err);
  }
);

export default request;
