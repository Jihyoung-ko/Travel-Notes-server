const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema(
	{
		note: String,
		photo: String,
		time: Date,
		location: String,
		people: String,
		album: { type: Schema.Types.ObjectId, ref: 'Album' },
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
