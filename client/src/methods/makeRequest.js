import axios from "axios";

export const baseUrl = "http://localhost:3000";

export const makeGetRequest = async (reqUrl) => {
  try {
    const result = await axios.get(`${baseUrl}/${reqUrl}`);
    return result.data;
  } catch (err) {
    throw Error(err);
  }
};

export const makePostRequest = async (reqUrl, data) => {
  try {
    const result = await axios.post(`${baseUrl}/${reqUrl}`, data);
    return result.data;
  } catch (err) {
    throw Error(err);
  }
};
