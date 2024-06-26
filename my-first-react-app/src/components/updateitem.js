import React, { useState } from 'react';
import { updateItem } from '../services/apiservices';  // Corrected path
import Button from './common/botton';
import Input from './common/input';

const UpdateItem = ({ currentItem, onSave }) => {
    const [name, setName] = useState(currentItem.name);
    const [description, setDescription] = useState(currentItem.description);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateItem(currentItem._id, { name, description });
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button type="submit">Update</Button>
        </form>
    );
};

export default UpdateItem;
