"use client";

import { signin } from "@/app/(auth)/action";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export default function FormSignIn() {
  const [error, setError] = useState("");

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <Button
        text={pending ? "Logging in..." : "Login"}
        variant="sign-in"
        type="submit"
        disabled={pending}
      />
    );
  }

  return (
    <form
      action={async (formData) => {
        const { error } = await signin(formData);
        setError(error);
      }}
    >
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

      <Submit />

      <div className="text-center text-xs font-semibold mb-2 text-red-500">
        {error}
      </div>
    </form>
  );
}
