import axios from "axios";

export const ApiViaCep = axios.create({
  baseURL: import.meta.env.VITE_APP_VIACEP_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

// ApiHondaIHS.interceptors.request.use(
//   (config) => {
//     let token;
//     if (typeof window !== "undefined") {
//       const localToken = localStorage.getItem("@token");

//       if (localToken) {
//         token = localToken.replaceAll('"', "");
//       }

//       if (token && config.headers !== undefined) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }

//     return config;
//   },

//   (error) => Promise.reject(error)
// );
