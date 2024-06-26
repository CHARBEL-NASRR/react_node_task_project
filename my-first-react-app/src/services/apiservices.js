// apiService.js

import axios from 'axios';

const API_URL = 'http://localhost:1337/api/items';

export const getItems = async () => {
    const response = await axios.get(API_URL);
    return response.data.items;
};

export const createItem = async (item) => {
    await axios.post(API_URL, item);
};

export const updateItem = async (id, item) => {
    await axios.put(`${API_URL}/${id}`, item);
};

export const deleteItem = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export const validatePhoneNumber = async (mobileNumber) => {
    try {
        const response = await axios.post('http://localhost:1337/api/validate', { mobileNumber });
        return response.data;
    } catch (error) {
        throw Error('Error validating phone number');
    }
};

export const createCategory = async (categoryData) => {
    try {
        const response = await axios.post(`http://localhost:1337/api/category`, categoryData);
        return response.data; // Assuming your API returns the created category object
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
};

