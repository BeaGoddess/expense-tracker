"use client";

import { signin } from "@/app/(auth)/action";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useState } from "react";

export default function FormSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function signInWithEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    const error = await signin(new FormData(event.currentTarget));
    if (error) {
      setError(error);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={signInWithEmail}>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        variant="sign-in"
        required
        onChange={() => setError("")}
      />

      <Input
        name="password"
        placeholder="Password"
        type="password"
        variant="sign-in"
        required
        onChange={() => setError("")}
      />

      <Button
        text={loading ? "Logging in" : "Login"}
        variant="sign-in"
        type={"submit"}
        disabled={loading}
      />

      <div className="text-center text-xs font-semibold mb-2 text-red-500">
        {error}
      </div>
    </form>
  );
}
