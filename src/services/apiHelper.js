import axios from "axios";

export const apiHelper=axios.create({baseURL:"http://localhost:8080"});

apiHelper.interceptors.request.use((requestOptions) =>{
    const token=localStorage.getItem("token");
    const tempHeaders={...requestOptions?.headers};
    if(token){
        tempHeaders["Authorization"]= `Bearer ${token}`;
    }
    requestOptions.headers=tempHeaders;
    return requestOptions;
});