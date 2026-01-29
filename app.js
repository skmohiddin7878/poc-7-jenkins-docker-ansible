const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('POC-7 CI/CD with Jenkins, Docker & Ansible');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
