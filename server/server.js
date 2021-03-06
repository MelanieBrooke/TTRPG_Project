const express = require('express');
const app = express();
const port = 2006;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
