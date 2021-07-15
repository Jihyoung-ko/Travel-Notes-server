const mongoose = require('mongoose');

const { Schema } = mongoose;

const albumSchema = new Schema(
	{
		title: { type: String, required: true },
		startDate: Date,
		endDate: Date,
		photo: String,
		article: { type: Schema.Types.ObjectId, ref: 'Article' },
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
