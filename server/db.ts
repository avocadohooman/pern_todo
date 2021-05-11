const Pool = require("pg").Pool;

const pool = new Pool({
    user: "gary",
    password: "ptennete",
    host: "localhost",
    port: "5432",
    database: "perntodo"
});

export default pool;