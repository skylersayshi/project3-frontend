// import axios from 'axios';

// const API = axios.create({baseURL: 'http://localhost:5001'})

// API.interceptors.request.use((req)=>{
//     if(localStorage.getItem('profile')){
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
//     return req;
// })


// export const getProfile = () => API.get(`/profile`);

// export const createUserInfo = (Info) => API.post('/profile', Info);

// export const patchProfile = (id, Info) => API.patch(`/profile`, Info);