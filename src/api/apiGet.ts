import axios, { AxiosRequestConfig } from "axios";
import { ErrorResponse } from "../interfaces/ErrorResponse";
export const apiGet = async (
  url: string,
  params?: { [key: string]: string | number }
): Promise<{} | any> => {
  try {
    const REACT_APP_BFF_API_URL = process.env.REACT_APP_BFF_API_URL;
    const axiosRequestConfig: AxiosRequestConfig = {
      method: "GET",
      url: `${REACT_APP_BFF_API_URL}/${url}`,
      params: params,
    };
    const data = await axios(axiosRequestConfig);
    return data.data;
  } catch (e: any) {
    if (e.response) {
      // Request made and server responded
      const response: ErrorResponse = {
        message: e.response.data.message,
        statusCode: e.response.data.statusCode,
      };
      return response;
    } else if (e.request) {
      // The request was made but no response was received
      console.log(e.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", e.message);
    }
  }
};
