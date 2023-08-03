const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/app1', express.static(path.join(__dirname, '..', '..', 'dist')));
app.use('/app2', express.static(path.join(__dirname, '..', '..', 'dist')));

app.get('/app1', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'app1.html'));
});

app.get('/app2', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..','dist', 'app2.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
