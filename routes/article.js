const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json({
		msg: 'this is article route',
	});
});

module.exports = router;
