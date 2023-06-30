import Link from "next/link";
import Header from "./internals/components/Header";
import SecondHeader from "./internals/components/SecondHeader";
import styles from "./internals/styles/home.css";

export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "10rem" }}>Welcome</h1>
      <Link style={{ fontSize: "2rem" }} href="/">
        Logout
      </Link>
    </div>
  );
}

{
  /* <div class="home">
    
    <Header />
    <SecondHeader />
  </div> */
}
