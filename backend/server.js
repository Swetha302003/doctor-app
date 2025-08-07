const express = require('express');
const cors = require('cors');
const doctors = require('./data/doctors.json');

const app = express();
app.use(cors());

// API endpoint to filter doctors by location and specialty
app.get('/api/doctors', (req, res) => {
  const { location = '', specialty = '' } = req.query;

  const results = doctors.filter(doc =>
    doc.location.toLowerCase().includes(location.toLowerCase()) &&
    doc.specialty.toLowerCase().includes(specialty.toLowerCase())
  );

  res.json(results);
});


app.get('/', (req, res) => {
  res.send('Doctor Finder API is running.');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
