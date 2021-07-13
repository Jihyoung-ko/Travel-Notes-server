const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema(
	{
		note: String,
    photo: String,
    tiem: Date,
    // location: Map(?) String(?),
    people: String
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

const Article = mongoose.model('User', articleSchema);

module.exports = Article;
