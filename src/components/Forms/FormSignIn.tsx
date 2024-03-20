"use client";
import { toast } from "react-toastify";
import { useSignIn as signin } from "@/hooks/auth";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useFormStatus } from "react-dom";

export default function FormSignIn() {
  function Submit() {
    const { pending } = useFormStatus();
    return (
      <Button
        text={pending ? "Logging in..." : "Login"}
        variant="auth"
        type="submit"
        disabled={pending}
      />
    );
  }

  return (
    <form
      action={async (formData) => {
        const { error } = await signin(formData);
        toast.error(error);
      }}
    >
      <Input
        type="email"
        name="email"
        placeholder="Email"
        variant="auth"
        required
      />

      <Input
        name="password"
        placeholder="Password"
        type="password"
        variant="auth"
        required
      />

      <Submit />
    </form>
  );
}
