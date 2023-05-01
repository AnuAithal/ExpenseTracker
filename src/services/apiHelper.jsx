import axios from "axios";

export const apiHelper = axios.create({ baseURL: "http://localhost:8080" });

apiHelper.interceptors.request.use(async (requestOptions) => {
  const token =await localStorage.getItem("token");
  console.log("tkn", token);
  const tempHeaders = { ...requestOptions?.headers };
  console.log("tempHeaders",tempHeaders);
  
  if (token) {
    tempHeaders["Authorization"] = `Bearer ${token}`;
  }
  requestOptions.headers = tempHeaders;
  return requestOptions;
});
