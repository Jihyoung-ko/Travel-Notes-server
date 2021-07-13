const express = require('express');

const router = express.Router();

// Get all Albums of user -private
router.get('/', (req, res) => {
	res.status(200).json({
		msg: 'this is album route',
	});
});

// Add new album
router.post('/', (req, res) => {
	res.status(200).json({
		msg: 'Add new album',
	});
});

// Update album
router.put('/:id', (req, res) => {
	res.status(200).json({
		msg: 'Update album',
	});
});

// Delete album
router.delete('/:id', (req, res) => {
	res.status(200).json({
		msg: 'Delete album',
	});
});

module.exports = router;
