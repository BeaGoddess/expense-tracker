"use client";
import { toast } from "react-toastify";
//import { signin } from "@/app/(auth)/action";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useFormStatus } from "react-dom";

export default function FormSignUp() {
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
    <form action={async (formData) => {}}>
      <Input name="name" placeholder="Name" variant="auth" required />

      <Input name="username" placeholder="Username" variant="auth" required />

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

      <Input
        name="repeat-password"
        placeholder="Repeat password"
        type="password"
        variant="auth"
        required
      />

      <Submit />
    </form>
  );
}
