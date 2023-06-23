import axios from "axios";
import md5 from "md5";

const API_URL = import.meta.env.VITE_API_URL;
const API_PUBLIC_KEY = import.meta.env.VITE_API_PUBLIC_KEY;
const API_PRIVATE_KEY = import.meta.env.VITE_API_PRIVATE_KEY;

const time = Date.now();

const hash = md5(time + API_PRIVATE_KEY + API_PUBLIC_KEY);

export const http = axios.create({
  baseURL: API_URL,
  params: {
    ts: time,
    apikey: API_PUBLIC_KEY,
    hash,
  },
});
