﻿const { Pool } = require("pg");

const pool = new Pool({
  user: "ecompredict_user",
  host: "10.116.0.3",
  database: "ecommerce",
  password: "Ecompredict0604!!",
  port: 5432,
});

module.exports = pool;

