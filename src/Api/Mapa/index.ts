import axios from "axios";
import { toast } from "react-toastify";

export const MapaApi = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

MapaApi.interceptors.request.use((config) => {
  let token = "";
  if (typeof window !== "undefined") {
    const localToken = localStorage.getItem("@token");

    if (localToken) {
      token = localToken.replaceAll('"', "");
    }

    if (token && config.headers !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

MapaApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      toast.error("Token expirado");
      setTimeout(() => {
        localStorage.clear();
        window.location.href = "/login";
      }, 1000);
    }

    return Promise.reject(error);
  }
);
