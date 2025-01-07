import axios from 'axios';

const API_URL = 'https://create-read-update-delete-operation.onrender.com/api/posts';
// const API_URL = 'http://localhost:5000/api/posts';

export const getAllPosts = () => axios.get(API_URL);
export const createPost = (post) => axios.post(API_URL, post);
export const getPostById = (id) => axios.get(`${API_URL}/${id}`);
export const updatePost = (id, post) => axios.put(`${API_URL}/${id}`, post);
export const deletePost = (id) => axios.delete(`${API_URL}/${id}`);
