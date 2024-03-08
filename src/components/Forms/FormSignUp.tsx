"use client";

import { toast } from "react-toastify";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useFormStatus } from "react-dom";
import { signup } from "@/app/(auth)/action";

export default function FormSignUp() {
  function Submit() {
    const { pending } = useFormStatus();
    return (
      <Button
        text={pending ? "Creating..." : "Create an account"}
        variant="auth"
        type="submit"
        disabled={pending}
      />
    );
  }

  const validatePw = (pw: string, repeatPw: string) => {
    return pw === repeatPw;
  };

  return (
    <form
      action={async (formData) => {
        if (
          validatePw(
            formData.get("password") as string,
            formData.get("repeat-password") as string
          )
        ) {
          const { error } = await signup(formData);
          toast.error(error);
        } else {
          toast.error("Password doesn't match.");
        }
      }}
    >
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
