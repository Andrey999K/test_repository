/* eslint-disable indent */
import axios from "axios";
import configFile from "../config.js";

import localStorageService from "./localStorage.service";
import { httpAuth } from "../hooks/useAuth";

const http = axios.create({
  baseURL: configFile.apiEndPoint
});

http.interceptors.request.use(
  async function (config) {
    const expiresDate = localStorageService.getTokenExpiresDate();
    const refreshToken = localStorageService.getRefreshToken();
    const isExpired = refreshToken && expiresDate < Date.now();
    if (configFile.isFireBase) {
      const containSlash = /\/$/gi.test(config.url);
      config.url = (containSlash ? config.url.slice(0, -1) : config.url) + ".json";
      if (isExpired) {
        const { data } = await httpAuth.post("token", {
          grant_type: "refresh_token",
          refresh_token: refreshToken
        });

        localStorageService.setTokens({
          refreshToken: data.refresh_token,
          idToken: data.id_token,
          expiresIn: data.expires_id,
          localId: data.user_id
        });
      }
      const accessToken = localStorageService.getAccessToken();
      if (accessToken) {
        config.params = { ...config.params, auth: accessToken };
      }
    } else {
      if (isExpired) {
        httpAuth
          .post("token", {
            grant_type: "refresh_token",
            refresh_token: refreshToken
          })
          .then(res => localStorageService.setTokens(res))
          .catch(error => console.log(error));
      }
      const accessToken = localStorageService.getAccessToken();
      if (accessToken) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${accessToken}`
        };
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

function transformData(data) {
  return data && !data._id
    ? Object.keys(data).map(key => ({
        ...data[key]
      }))
    : data;
}

http.interceptors.response.use(
  res => {
    if (configFile.isFireBase) {
      res.data = { content: transformData(res.data) };
    }
    res.data = { content: res.data };
    return res;
  },
  function (error) {
    const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedErrors) {
      localStorageService.removeAuthData();
    }
    return Promise.reject(error);
  }
);
const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch
};
export default httpService;
