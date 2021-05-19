const express = require('express');
const app = express();
const PORT = 7000;

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));