import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const api = axios.create({
    baseURL : "http://localhost:3000",
    withCredentials: true
})

// ==== REQUEST INTERCEPTOR ====

let isRefreshing = false;
let queue : any = [];

api.interceptors.response.use( res => res, async (error) => {
        const originalRequest = error.config;
        if((error.response?.status === 401 && !originalRequest._retry) || (error.response?.status === 403 && !originalRequest._retry)){
            originalRequest._retry = true;
            if(!isRefreshing){ // tránh nhiều refresh khi req cùng hết hạn 
                isRefreshing = true;
                try{
                    await axios.post(BASE_URL + "/auth/refresh", {},
                        {
                            withCredentials : true 
                        } // cần thiết để gửi cookie vì request này không qua interceptor
                    );

                    queue.forEach((cb : () => void )  => cb())
                    queue = []
                    console.log("Refresh token success, retry original request")
                    return api(originalRequest);
                }
                catch(err){
                    console.log(err);
                    console.log("Refresh token expired => logout");
                }finally{
                    isRefreshing = false;
                }
            }

            return new Promise( resolve =>{
                queue.push( () => resolve(api(originalRequest)))
            })
        }

        return Promise.reject(error);

    }
)

export default api;