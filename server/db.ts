const Pool = require("pg").Pool;

const pool = new Pool({
    user: "gary",
    password: "ptennete",
    host: "localhost",
    port: "3001",
    database: "perntodo"
});

export default pool;