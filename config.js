const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

module.exports = {
    ENV_TYPE : process.env.NODE_ENV || 'development',
    HOST : process.env.HOST || 'localhost',
    PORT : process.env.PORT || 3030,
    DB_HOST: process.env.DB_HOST || 'mongodb://localhost:27017',
    DB_NAME: process.env.DB_NAME || 'SampleDB'
}