import React, { useState, useEffect } from 'react';
import { getItems, deleteItem } from '../services/apiservices';  // Corrected path
import ItemList from '../components/itemlist';  // Corrected path
import { Link } from 'react-router-dom';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const items = await getItems();
        setItems(items);
    };

    const handleDelete = async (id) => {
        await deleteItem(id);
        fetchItems();
    };

    return (
        <div>
            <h1>Item List</h1>
            <Link to="/create">Create New Item</Link>
            <ItemList items={items} onDelete={handleDelete} />
        </div>
    );
};

export default Home;
