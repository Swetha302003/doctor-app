import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ResultsPage() {
  const [doctors, setDoctors] = useState([]);
  const router = useRouter();
  const { location, specialty } = router.query;

  useEffect(() => {
    if (location && specialty) {
      fetch(`http://localhost:5000/api/doctors?location=${location}&specialty=${specialty}`)
        .then(res => res.json())
        .then(data => setDoctors(data))
        .catch(err => console.error('Error fetching doctors:', err));
    }
  }, [location, specialty]);

  return (
    <div>
      <h1>Search Results</h1>
      {doctors.length === 0 ? (
        <p>No doctors found.</p>
      ) : (
        <ul>
          {doctors.map((doc, index) => (
            <li key={index}>
              <h3>{doc.name}</h3>
              <p>{doc.specialty} - {doc.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



