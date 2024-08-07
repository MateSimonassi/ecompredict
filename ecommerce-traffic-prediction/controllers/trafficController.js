const trafficModel = require("../models/trafficModel");

exports.getTrafficData = async (req, res) => {
  try {
    const data = await trafficModel.getTrafficData();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addTrafficData = async (req, res) => {
  try {
    const { date, visits, sales } = req.body;
    await trafficModel.addTrafficData(date, visits, sales);
    res.status(201).json({ message: "Data added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

