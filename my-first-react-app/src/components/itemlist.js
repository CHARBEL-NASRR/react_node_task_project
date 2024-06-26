import React from 'react';
import { Link } from 'react-router-dom';
import Button from './common/botton';

const ItemList = ({ items, onDelete, onEdit }) => (
    <ul>
        {items.map(item => (
            <li key={item._id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.mobileNumber}</p>
                <Link to={`/update/${item._id}`}>Edit</Link>
                <Button onClick={() => onDelete(item._id)}>Delete</Button>
            </li>
        ))}
    </ul>
);

export default ItemList;
