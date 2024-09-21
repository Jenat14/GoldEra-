const express = require('express');
const router = express.Router();
const { db } = require('../firebase');

router.post('/', async (req, res) => {
    try {
        const { id, password, usertype } = req.body;
        if (!id || !password || !usertype) {
            console.log('Missing required fields');
            return res.status(400).json({ error: 'ID, password, and usertype are required' });
        }
        const userRef = db.collection(usertype).doc(id);
        const userSnapshot = await userRef.get();
        if (!userSnapshot.exists) {
            console.log('User not found');
            return res.status(404).json({ error: 'User not found' });
        }
        const userData = userSnapshot.data();

        if (password !== userData.password) {
            console.log('Password mismatch');
            return res.status(401).json({ error: 'Invalid password' });
        }

        return res.json({
            message: 'Login successful',
            user: {
                Name: userData.Name,
            }
        });
    } catch (error) {
        console.error('Error authenticating user:', error);
        return res.status(500).json({ error: 'Failed to authenticate user' });
    }
});

module.exports = router;
