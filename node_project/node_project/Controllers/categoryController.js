const { MongoClient, ObjectId } = require('mongodb');

let db;


const createCategory = (req, res) => {
    const name = req.body.name;

    db.collection('categories').insertOne({ name })
        .then(result => {
            res.status(201).json({ message: 'Category created', categoryId: result.insertedId });
        })
        .catch(err => {
            console.error('Error creating category:', err);
            res.status(500).json({ message: 'Failed to create category' });
        });
};

const getCategories = async (req, res) => {
    try {
        const categories = await db.collection('categories').find().toArray();
        res.status(200).json({ categories });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Failed to fetch categories' });
    }
};

module.exports = {
    createCategory,
    getCategories
};
