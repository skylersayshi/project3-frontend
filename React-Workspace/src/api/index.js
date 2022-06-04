import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5001'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

// const url = 'http://localhost:5001/posts';

export const fetchPosts = () => API.get('/posts');

export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);

export const createPost = (newPost) => API.post('/posts', newPost);

export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/users/signin', formData);

export const signUp = (formData) => API.post('/users/signup', formData);

export const fetchUsers = () => API.get('/users/profile')

export const updateProfile = (id, profileData) => API.patch(`/users/profile/${id}`, profileData);

export const getrecipes = () => API.get('/recipes');

export const createrecipe = (newRecipe) => API.post('/recipes', newRecipe);

export const updaterecipe = (id, updatedRecipe) => API.patch(`/recipes/${id}`, updatedRecipe);

export const deleterecipe = (id) => API.delete(`/recipes/${id}`);
