const db = require("../config/db");

exports.getTrafficData = async () => {
  const result = await db.query("SELECT * FROM traffic");
  return result.rows;
};

exports.addTrafficData = async (date, visits, sales) => {
  await db.query(
    "INSERT INTO traffic (date, visits, sales) VALUES ($1, $2, $3)",
    [date, visits, sales]
  );
};

