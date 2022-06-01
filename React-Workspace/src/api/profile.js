import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5001'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

// const url = 'http://localhost:5001/posts';

export const fetchPosts = () => API.get('/profile');

export const createPost = (newPost) => API.post('/profile', newPost);

export const updatePost = (id, updatedPost) => API.patch(`profile/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/profile/${id}`);

export const likePost = (id) => API.patch(`/profile/${id}/likePost`);

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);
