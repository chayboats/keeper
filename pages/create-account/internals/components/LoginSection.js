import Link
 from "next/link";
export default function LoginSection() {
  return (
    <div className="log-in">
      <p>Already have an account?</p>
      <Link
        className="log-in-link"
        href="/login"
      >
        Log in
      </Link>
    </div>
  );
}
