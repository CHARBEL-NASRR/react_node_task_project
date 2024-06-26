import React from 'react';

const Input = ({ name, value, onChange, placeholder, type = 'text' }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Input;
