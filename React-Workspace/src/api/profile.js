import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5001'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('user')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    }
    return req;
})


export const getProfile = () => API.get(`/profile`);


export const createUserInfo = (Info) => API.post('/profile', Info);

export const patchProfile = (Info) => API.put(`/profile`, Info);