const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1/nodejs_course_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('successful');
    } catch (error) {
        console.log('failure');
    }
}

module.exports = {connect};
