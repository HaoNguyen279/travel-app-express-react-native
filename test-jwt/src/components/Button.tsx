import axios from 'axios';
import { useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL; 

export default function Button({email, password, setMessage } : {email : string, password : string, setMessage : (data : any) => void}) {
    const login = async () =>{
        axios.post(BASE_URL + '/auth/login', {
            email: email,
            password: password
        },{
            "withCredentials" : true
        })
        .then((response) => {
            const msg = response?.data?.message ?? 'Đăng nhập thành công';
            console.log(msg);
            if(response.status === 401 || response.status === 403){
                console.log("401 or 403 detected");   
                return;
            }

            setMessage(msg);
        })
        .catch((error) => {
            console.error('There was an error!', error);
            const errMsg = error?.response?.data?.message || error?.message || 'Có lỗi xảy ra';
            setMessage(errMsg);
        });
    }

    const fetchPlace = async () =>{
        axios.get(BASE_URL + '/api/places/getAllPlaces', 
            {
                "withCredentials" : true
            }
        ).then((response) =>{
            const msg = response?.data || null;
            console.log(msg);
            setMessage(JSON.stringify(msg));
        }).catch(error =>{
            console.log(error);
            const errMsg = error?.response?.data?.message || error?.message || 'Có lỗi xảy ra';
            setMessage(errMsg);
        })
    }

    return (
        <div>
            <button onClick={login}>Login</button>
            <button onClick={fetchPlace}>Fetch place</button>
        </div>


    )


}