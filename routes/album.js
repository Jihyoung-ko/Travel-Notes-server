const express = require('express');
const createError = require('http-errors');

const { checkIfLoggedIn } = require('../middlewares');

const router = express.Router();

const Album = require('../models/Album');

// Get all Albums of user
router.get('/', checkIfLoggedIn, async (req, res, next) => {
	try {
		const albums = await Album.find({ user: req.session.currentUser });
		return res.status(200).json(albums);
	} catch (error) {
		return next(error);
	}
});

// Add new album
router.post('/', checkIfLoggedIn, async (req, res, next) => {
	const { title, startDate, endDate, photo } = req.body;
	try {
		if (!title) {
			return next(createError(422));
		}

		const newAlbum = await Album.create({
			title,
			startDate,
			endDate,
			photo,
			user: req.session.currentUser,
		});
		return res.json(newAlbum);
	} catch (error) {
		return next(error);
	}
});

// Update album
router.put('/:id', checkIfLoggedIn, async (req, res, next) => {
	const { title, startDate, endDate, photo } = req.body;
	const { id } = req.params;

	const albumFields = {};
	if (title) albumFields.title = title;
	if (startDate) albumFields.startDate = startDate;
	if (endDate) albumFields.endDate = endDate;
	if (photo) albumFields.photo = photo;

	try {
		const album = await Album.findById(id);
		if (!album) {
			return next(createError(404));
		}
		const updatedAlbum = await Album.findByIdAndUpdate(id, { $set: albumFields }, { new: true });
		return res.json(updatedAlbum);
	} catch (error) {
		return next(error);
	}
});

// Delete album
router.delete('/:id', checkIfLoggedIn, async (req, res, next) => {
	const { id } = req.params;
	try {
		const album = await Album.findById(id);
		if (!album) {
			return next(createError(404));
		}
		await Album.findByIdAndRemove(id);
		return res.send({ mgs: 'Album removed' });
	} catch (error) {
		return next(error);
	}
});

module.exports = router;
