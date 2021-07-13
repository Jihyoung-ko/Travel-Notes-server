const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		hashedPassword: { type: String, required: true },
		album: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
