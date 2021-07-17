const express = require('express');
const createError = require('http-errors');

const { checkIfLoggedIn } = require('../middlewares');

const router = express.Router();

const Article = require('../models/Article');

// Get all articles
router.get('/', checkIfLoggedIn, async (req, res, next) => {
	try {
		const articles = await Article.find();
		return res.status(200).json(articles);
	} catch (error) {
		next(error);
	}
})

// Get details of article
router.get('/:id', checkIfLoggedIn, async (req, res, next) => {
	const { id } = req.params;
	try {
		const article = await Article.findById(id);
		return res.status(200).json(article);
	} catch (error) {
		return next(error);
	}
});

// Add new article
router.post('/', checkIfLoggedIn, async (req, res, next) => {
	const { note, photo, time, location, people, album } = req.body;
	try {
		const newArticle = await Article.create({
			note,
			photo,
			time,
			location,
			people,
			album,
		});
		return res.status(200).json(newArticle);
	} catch (error) {
		return next(error);
	}
});

// Update article
router.put('/:id', checkIfLoggedIn, async (req, res, next) => {
	const { note, photo, time, location, people } = req.body;
	const { id } = req.params;

	const articleFields = {};
	if (note) articleFields.note = note;
	if (photo) articleFields.photo = photo;
	if (time) articleFields.time = time;
	if (location) articleFields.location = location;
	if (people) articleFields.people = people;

	try {
		const article = await Article.findById(id);
		if (!article) {
			return next(createError(404));
		}
		const updatedArticle = await Article.findByIdAndUpdate(id, { $set: articleFields }, { new: true });
		return res.status(200).json(updatedArticle);
	} catch (error) {
		return next(error);
	}
});

// Delete article
router.delete('/:id', checkIfLoggedIn, async (req, res, next) => {
	const { id } = req.params;
	try {
		const article = await Article.findById(id);
		if (!article) {
			return next(createError(404));
		}
		await Article.findByIdAndRemove(id);
		return res.send({ mgs: 'Article removed' });
	} catch (error) {
		return next(error);
	}
});

module.exports = router;
