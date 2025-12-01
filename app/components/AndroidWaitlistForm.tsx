"use client";

import { useState } from "react";

export default function AndroidWaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string>("");

  function isValidEmail(value: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/android-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok || data?.error) {
        throw new Error(data?.error || "Something went wrong.");
      }
      setStatus("success");
      setMessage(
        data?.duplicate
          ? "You're already on the Android waitlist."
          : "You're on the Android waitlist. Thanks!"
      );
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Failed to join the waitlist.");
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="rounded-lg bg-white/70 p-4 shadow">
        <p className="mt-1 text-sm text-gray-600">
          Join the Android waitlist and get notified when it launches.
        </p>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            inputMode="email"
            placeholder="you@example.com"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/30"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            required
          />
          <button
            type="submit"
            className="rounded-md bg-black px-4 py-2 text-white disabled:opacity-50"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Joining..." : "Join waitlist"}
          </button>
        </form>
        {message ? (
          <p
            className={`mt-2 text-sm ${
              status === "error" ? "text-red-600" : "text-green-700"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </div>
  );
}


