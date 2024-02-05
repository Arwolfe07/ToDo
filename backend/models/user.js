const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    location: {
        longitude: { type: String },
        latitude: { type: String },
        area: { type: String }
    },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ],
    isVerified: { type: Boolean, default: false },
    profilePic: {
        type: String, 
        default: "https://res.cloudinary.com/dmiwkobsc/image/upload/v1706706875/nfxbonc3remcipr9fefy.svg"
    }
})

module.exports = mongoose.model("User", userSchema);