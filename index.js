///left off at 37 minutes
// https://www.youtube.com/watch?v=L72fhGm1tfE

const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();

//init middleware
//app.use(logger);

//Gets All Members
app.get('/api/members', (req, res) => {
  res.json(members);
});

//Get Single member
app.get('/api/members/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ msg: `No member with the id of ${req.params.id} found` });
  }
});

//Set up static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
