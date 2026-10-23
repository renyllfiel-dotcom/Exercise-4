
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (email.trim() === "") {
      setError("Please enter your email.");
      return;
    }

    if (!/^[^\s@]+@gmail\.com$/i.test(email.trim())) {
      setError("Please enter a valid Gmail address.");
      return;
    }

    if (password.length <= 8) {
      setError("Password must be more than 8 characters.");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="logo">N</div>
        <p className="welcome">WELCOME BACK</p>
        <h1>Sign in</h1>
        <p className="subtitle">
          Enter your details to access your account.
        </p>

        <form onSubmit={handleLogin} noValidate>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="text"
            placeholder="you@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">
            Login
          </button>

          {error && (
            <p className="error-message" role="alert">
              {error}
            </p>
          )}
        </form>

        <p className="footer-text">
          Exercise 4 · React Form Validation
        </p>
      </section>
    </main>
  );
}
