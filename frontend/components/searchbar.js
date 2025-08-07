import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (!location || !specialty) return;
    router.push(`/search?location=${location}&specialty=${specialty}`);
  };

  return (
    <div className="responsive-container">
      <h1>Your home for health</h1>
      <h3>Find and Book</h3>
      <input
        type="text"
        placeholder="Enter Location (e.g., JP Nagar)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Specialty (e.g., Dermatologist)"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}


