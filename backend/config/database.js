const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.set("strictQuery", false);

    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`✅ MongoDB connected: ${con.connection.host}`);
    }).catch(err => {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1);
    });
};

module.exports = connectDatabase;