import React, { useState } from 'react';
import axios from 'axios';

const CreateItemPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:1337/api/items', { name, description, mobileNumber });
            alert('Item created successfully!');
            // Optionally navigate to another page after creation
        } catch (error) {
            console.error('Error creating item:', error);
            alert('Failed to create item');
        }
    };

    return (
        <div>
            <h2>Create New Item</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
                <button type="submit">Create Item</button>
            </form>
        </div>
    );
};

export default CreateItemPage;
