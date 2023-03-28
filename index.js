const express = require('express');
const fs = require('fs');
const app = express();

// Read the JSON file
const rawData = fs.readFileSync('./ipv4.json');
const ipList = JSON.parse(rawData);

// Endpoint to return the list of IPs
app.get('/ips', (req, res) => {
  res.json(ipList);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});