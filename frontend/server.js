const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${process.env.BACKEND_URL || "http://localhost:5000"}/api/quote`);
    const quote = response.data.quote;

    res.send(`
      <html>
        <body style="font-family: Arial; text-align:center; margin-top:50px;">
          <h1>Random Quote</h1>
          <p style="font-size: 20px;">"${quote}"</p>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send("Error fetching quote");
  }
});

app.listen(3000, () => {
  console.log("Frontend running on 3000");
});
