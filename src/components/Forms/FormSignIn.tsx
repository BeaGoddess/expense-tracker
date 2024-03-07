"use client";

import { signin } from "@/app/(auth)/sign-in/action";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useState } from "react";

export default function FormSignIn() {
  const [loading, setLoading] = useState(false);

  async function signInWithEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    await signin(new FormData(event.currentTarget));
    setLoading(false);
  }

  return (
    <form onSubmit={signInWithEmail}>
      <Input type="email" name="email" placeholder="Email" variant="sign-in" />

      <Input
        name="password"
        placeholder="Password"
        type="password"
        variant="sign-in"
      />

      <Button
        text={loading ? "Logging in" : "Login"}
        variant="sign-in"
        type={"submit"}
        disabled={loading}
      />
    </form>
  );
}
