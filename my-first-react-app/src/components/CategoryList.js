import React, { useState } from 'react';
import axios from 'axios';
import Button from './common/botton'; // Adjust path as needed
import Input from './common/input'; // Adjust path as needed

const CreateCategory = ({ onSave }) => {
    const [name, setName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:1337/api/category', { name });
            console.log(response.data); // Log response for debugging
            onSave(); // Callback function to notify parent component of successful save
        } catch (error) {
            console.error('Error creating category:', error);
            alert('Failed to create category. Please try again.');
        }
    };

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
                <Input
                    type="text"
                    placeholder="Category Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control mb-3"
                />
                <Button type="submit" className="btn btn-primary">Create Category</Button>
            </form>
        </div>
    );
};

export default CreateCategory;
