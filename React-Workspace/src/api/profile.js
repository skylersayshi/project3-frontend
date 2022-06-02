import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5001'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('user')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    }
    return req;
})


export const getProfile = () => API.get(`/profile`);


export const createUserInfo = (userData) => API.post('/profile', userData);

export const patchProfile = (userData) => API.put(`/profile`, userData);