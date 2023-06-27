import TextBlock from './TextBlock';
import Link from 'next/link';

export default function Main() {
  return (
    <main className="px-3">
      <h1>Keep your notes.</h1>
      <TextBlock />
      <Link
        href="/login"
        className="sign-in-button btn btn-lg btn-dark fw-bold bg-dark"
      >
        Sign In
      </Link>
    </main>
  );
}
