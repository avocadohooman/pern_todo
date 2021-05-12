const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: "gary",
//     password: "ptennete",
//     host: "localhost",
//     port: "5432",
//     database: "perntodo"
// });

const pool = new Pool({
    user: "kdwjzjcpolpgbg",
    password: "7f0c635bb8df9120020baa77b1c80d85b1acc0a1819a7ce5a4f8e359a1ea5961",
    host: "ec2-3-233-7-12.compute-1.amazonaws.com",
    port: "5432",
    database: "dbss3t0nrsu4m8"
});

export default pool;