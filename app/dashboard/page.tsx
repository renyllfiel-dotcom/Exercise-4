
"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="logo">N</div>

        <p className="welcome">LOGIN SUCCESSFUL</p>
        <h1>Welcome!</h1>

        <p className="subtitle">
          You have successfully passed the login form validation.
        </p>

        <button
          className="login-button"
          onClick={() => router.push("/")}
        >
          Logout
        </button>
      </section>
    </main>
  );
}
