const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema(
	{
		note: String,
		photo: String,
		time: Date,
		// location: Map(?) String(?),
		people: String,
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
