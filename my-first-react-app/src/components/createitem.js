import React, { useState } from 'react';
import { createItem } from '../services/apiservices'; // Assuming createItem is correctly implemented
import axios from 'axios'; // Import axios for validation API call
import Button from './common/botton'; // Correct the import if needed
import Input from './common/input'; // Correct the import if needed

const CreateItem = ({ onSave }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberValid, setPhoneNumberValid] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!phoneNumberValid) {
            alert('Please enter a valid phone number.');
            return;
        }

        try {
            // Validate phone number before creating item
            const isValid = await validatePhoneNumber(phoneNumber);

            if (!isValid) {
                alert('Phone number is not valid.');
                return;
            }

            // If valid, proceed to create item
            await createItem({ name, description, phoneNumber });
            onSave(); // Callback function to notify parent component of successful save
        } catch (error) {
            console.error('Error creating item:', error);
            alert('Failed to create item. Please try again.');
        }
    };

    const validatePhoneNumber = async (phoneNumber) => {
        try {
            const response = await axios.post('http://localhost:1337/api/validate', { mobileNumber: phoneNumber });
            return response.data.valid; // Assuming the API returns { valid: true/false }
        } catch (error) {
            console.error('Error validating phone number:', error);
            throw error;
        }
    };

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control mb-3"
                />
                <Input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control mb-3"
                />
                <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={`form-control mb-3 ${phoneNumberValid ? '' : 'is-invalid'}`}
                />
                {!phoneNumberValid && <div className="invalid-feedback">Please enter a valid phone number.</div>}
                <Button type="submit" className="btn btn-primary">Create</Button>
            </form>
        </div>
    );
};

export default CreateItem;
