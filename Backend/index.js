const express = require('express');
const cors = require('cors');
const app = express();
const LoginRoutes = require('./Routes/login');
const Contract = require('./Routes/contractroutes')

app.use(express.json());
app.use(cors()); 
app.use('/login', LoginRoutes);
app.use('/contract',Contract)

app.get('/', (req, res) => {
  res.send('Hello World');
});
const { db } = require('./firebase');


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
