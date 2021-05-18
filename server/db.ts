const Pool = require("pg").Pool;
require('dotenv').config();

// const devConfig = {
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     database: process.env.PG_DATABASE
// }

// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const proConfig = process.env.DATABASE_URL; //heroku addons
const devConfig = 'postgres://bjyadbbntzltdy:e6c8a74215477e9a09065afa51956d71e8cc55f5ef030dffa0b6c21036e32783@ec2-176-34-105-15.eu-west-1.compute.amazonaws.com:5432/d3q10p0cudft6b';

const testConfig = {

};

const pool = new Pool({
    connectionString:
        process.env.NODE_ENV === "production" ? proConfig : devConfig,
    ssl: {
            rejectUnauthorized: false
    }
});



export default pool;