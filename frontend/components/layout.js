import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      {/* Top Navigation Bar */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        backgroundColor: '#0070f3',
        color: '#fff'
      }}>
        <h2 style={{ margin: 0 }}>HealthHub</h2>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <Link href="#"><span style={{ cursor: 'pointer' }}>For Corporates</span></Link>
          <Link href="#"><span style={{ cursor: 'pointer' }}>For Providers</span></Link>
          <Link href="#"><span style={{ cursor: 'pointer' }}>Security & Help</span></Link>
          <Link href="#"><span style={{ cursor: 'pointer' }}>Login</span></Link>
        </nav>
      </header>

      {/* Page Content */}
      <main style={{ padding: '20px' }}>
        {children}
      </main>
    </div>
  );
}
