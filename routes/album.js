const express = require('express');
const { checkIfLoggedIn } = require('../middlewares');

const router = express.Router();

const Album = require('../models/Album');
const User = require('../models/User');

// Get all Albums of user
router.get('/', checkIfLoggedIn, async (req, res, next) => {
	try {
		const albums = await Album.find({  });
		res.status(200).json(albums)
	} catch (error) {
		return next(error);
	}
});

// Add new album
router.post('/', checkIfLoggedIn, (req, res) => {
	res.status(200).json({
		msg: 'Add new album',
	});
});

// Update album
router.put('/:id', checkIfLoggedIn, (req, res) => {
	res.status(200).json({
		msg: 'Update album',
	});
});

// Delete album
router.delete('/:id', checkIfLoggedIn, (req, res) => {
	res.status(200).json({
		msg: 'Delete album',
	});
});

module.exports = router;
