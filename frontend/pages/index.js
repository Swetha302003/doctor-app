import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Home() {
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (!location || !specialty) return;
    router.push(`/search?location=${encodeURIComponent(location)}&specialty=${encodeURIComponent(specialty)}`);
  };

  return (
    <>
      <Head>
        <title>HealthHub | Your home for health</title>
        <meta name="description" content="Search and book appointments with doctors in your city." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{ minHeight: '100vh', backgroundColor: '#f5f7fa', fontFamily: 'sans-serif' }}>
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#1a73e8',
          color: 'white',
          padding: '1rem 2rem'
        }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>HealthHub</div>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <a style={{ color: 'white', textDecoration: 'none' }} href="#">For Corporates</a>
            <a style={{ color: 'white', textDecoration: 'none' }} href="#">For Providers</a>
            <a style={{ color: 'white', textDecoration: 'none' }} href="#">Security & Help</a>
            <a style={{ color: 'white', textDecoration: 'none' }} href="#">Login</a>
            <a style={{ color: 'white', textDecoration: 'none' }} href="#">Signup</a>
          </nav>
        </header>

        <div style={{ display: 'flex' }}>
          <aside style={{
            width: '18%',
            backgroundColor: '#e3ebf6',
            padding: '1.5rem',
            borderRight: '1px solid #ccc',
            height: 'calc(100vh - 80px)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem' }}>
              <li style={{ marginBottom: '1rem' }}><a href="#" style={{ textDecoration: 'none', color: '#1a73e8' }}>Find Doctors</a></li>
              <li style={{ marginBottom: '1rem' }}><a href="#" style={{ textDecoration: 'none', color: '#1a73e8' }}>Video Consult</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: '#1a73e8' }}>Surgeries</a></li>
            </ul>
          </aside>

          <section style={{
            flex: 1,
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
              Your home for health
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
              Find experienced doctors across all specialties
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem'
            }}>
              <input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  width: '250px'
                }}
              />
              <input
                type="text"
                placeholder="Search for a specialty"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                style={{
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  width: '250px'
                }}
              />
              <button
                onClick={handleSearch}
                style={{
                  padding: '0.8rem 2rem',
                  borderRadius: '8px',
                  backgroundColor: '#1a73e8',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Search
              </button>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <div>
                <Image src="/images/image1.jpg" alt="Image 1" width={200} height={120} style={{ borderRadius: '10px' }} />
              </div>
              <div>
                <Image src="/images/image2.jpg" alt="Image 2" width={200} height={120} style={{ borderRadius: '10px' }} />
              </div>
              <div>
                <Image src="/images/image3.jpg" alt="Image 3" width={200} height={120} style={{ borderRadius: '10px' }} />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
