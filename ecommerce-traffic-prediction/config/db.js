const { Pool } = require("pg");

const pool = new Pool({
  user: "ecompredict_user",
  host: "64.227.29.8",
  database: "ecommerce",
  password: "Ecompredict0604!!",
  port: 5432,
});

module.exports = pool;

