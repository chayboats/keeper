import Link from 'next/link';
export default function Home() {
  return (
    <div style={{ textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '10rem' }}>Welcome</h1>
      <Link
        style={{ fontSize: '2rem' }}
        href="/"
      >
        Logout
      </Link>
    </div>
  );
}
