const express = require('express');
const app = express();

app.get('api/users', (req, res) => {
  // Handle Get request for /api/users
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Joe' },
  ];

  // send the users as a response
  res.json(users);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
