import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

export default function ResultsPage() {
  const [doctors, setDoctors] = useState([]);
  const router = useRouter();
  const { location, specialty } = router.query;

  const [searchLocation, setSearchLocation] = useState(location || '');
  const [searchSpecialty, setSearchSpecialty] = useState(specialty || '');

  useEffect(() => {
    if (location && specialty) {
      fetch(`http://localhost:5000/api/doctors?location=${location}&specialty=${specialty}`)
        .then(res => res.json())
        .then(data => setDoctors(data))
        .catch(err => console.error('Error fetching doctors:', err));
    }
  }, [location, specialty]);

  return (
    <Layout>
      <div style={{ maxWidth: '1000px', margin: 'auto' }}>
        {/* Clean Header with Search Box */}
        <div style={{
          margin: '30px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          {/* 🔹 Updated Search Box like Homepage */}
          <div style={{ display: 'flex', gap: '15px' }}>
            <input
              type="text"
              placeholder="Location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              style={{
                padding: '12px 15px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                flex: 1
              }}
            />
            <input
              type="text"
              placeholder="Specialty"
              value={searchSpecialty}
              onChange={(e) => setSearchSpecialty(e.target.value)}
              style={{
                padding: '12px 15px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                flex: 1
              }}
            />
            <button
              onClick={() => {
                router.push({
                  pathname: '/search',
                  query: { location: searchLocation, specialty: searchSpecialty }
                });
              }}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                borderRadius: '8px',
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Search
            </button>
          </div>

          {/* Filter Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Gender', 'Patient Stories', 'Experience', 'All Filters', 'Sort By'].map((filter, idx) => (
              <button
                key={idx}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f7f7f7',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Results Heading */}
        <h2>{doctors.length} {specialty}s available in {location}</h2>

        {/* Doctor Cards */}
        {doctors.length === 0 ? (
          <p>No doctors found.</p>
        ) : (
          doctors.map((doc, index) => (
            <div key={index} style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '20px',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <div>
                <h3 style={{ marginBottom: '5px', color: '#0070f3' }}>{doc.name}</h3>
                <p style={{ margin: '4px 0' }}>{doc.specialty}</p>
                <p style={{ margin: '4px 0' }}>{doc.experience} years experience</p>
                <p style={{ margin: '4px 0' }}>{doc.location}</p>
                <p style={{ margin: '4px 0' }}>₹{doc.fee} Consultation Fee</p>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <span style={{
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    padding: '3px 8px',
                    borderRadius: '5px',
                    fontSize: '14px',
                    marginRight: '10px'
                  }}>{doc.rating}%</span>
                  <a href="#" style={{ color: '#0070f3', fontSize: '14px' }}>{doc.stories} Patient Stories</a>
                </div>
              </div>
              <div>
                <p style={{ color: '#4CAF50', fontWeight: 'bold', marginBottom: '8px' }}>Available Today</p>
                <button style={{
                  backgroundColor: '#0070f3',
                  color: '#fff',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  border: 'none',
                  marginBottom: '10px',
                  cursor: 'pointer'
                }}>Book Clinic Visit</button>
                <br />
                <button style={{
                  backgroundColor: '#fff',
                  color: '#0070f3',
                  border: '1px solid #0070f3',
                  padding: '8px 15px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Contact Clinic</button>
              </div>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}
