import React, { useState, useEffect } from 'react';
import UpdateItem from '../components/updateitem';  // Corrected path
import { useParams, useNavigate } from 'react-router-dom';
import { getItems } from '../services/apiservices';  // Corrected path

const UpdateItemPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            const items = await getItems();
            const item = items.find(item => item._id === id);
            setCurrentItem(item);
        };
        fetchItem();
    }, [id]);

    const handleSave = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Update Item</h1>
            {currentItem && <UpdateItem currentItem={currentItem} onSave={handleSave} />}
        </div>
    );
};

export default UpdateItemPage;
