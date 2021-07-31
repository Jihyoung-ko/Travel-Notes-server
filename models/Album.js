const mongoose = require('mongoose');

const { Schema } = mongoose;

const albumSchema = new Schema(
	{
		title: { type: String, required: true },
		startDate: Date,
		endDate: Date,
		photo: String,
		user: { type: Schema.Types.ObjectId, ref: 'User' },
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
