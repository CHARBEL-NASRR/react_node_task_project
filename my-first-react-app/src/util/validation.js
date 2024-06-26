export const validateItem = (item) => {
    if (!item.name || !item.description || !item.mobileNumber) {
        return 'All fields are required';
    }
    if (!/^\d{10}$/.test(item.mobileNumber)) {
        return 'Mobile number must be 10 digits';
    }
    return null;
};
