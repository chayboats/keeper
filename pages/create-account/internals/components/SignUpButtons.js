export default function SignUpButtons() {
  return (
    <div>
      <button
        type="submit"
        className="button btn btn-dark"
      >
        Create Account
      </button>
      <button className="button btn btn-light">
        <i className="fa-brands fa-google"></i>Sign up with Google
      </button>
    </div>
  );
}
