const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json({
		msg: 'this is article route',
	});
});

// Add new article
router.post('/', (req, res) => {
	res.status(200).json({
		msg: 'Add new article',
	});
});

// Update article
router.put('/:id', (req, res) => {
	res.status(200).json({
		msg: 'Update article',
	});
});

// Delete article
router.delete('/:id', (req, res) => {
	res.status(200).json({
		msg: 'Delete article',
	});
});

module.exports = router;
