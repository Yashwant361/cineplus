const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/cinepulse");
        console.log('MongoDB connected');

    }
    catch (error) {
        console.error("Error=>", error)
    }
}

module.exports = connectDB