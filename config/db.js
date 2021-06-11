const mongoose = require('mongoose');
require('dotenv').config({ path: 'vars.env' });

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('BD Connected ...');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

module.exports = dbConnection
