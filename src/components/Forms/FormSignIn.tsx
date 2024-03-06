import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

async function formAction(formData: FormData) {
  "use server";

  const rawFormData = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
}

export default function FormSignIn() {
  return (
    <form action={formAction}>
      <Input
        type="text"
        name="username"
        placeholder="Username"
        variant="sign-in"
      />

      <Input
        name="password"
        placeholder="Password"
        type="password"
        variant="sign-in"
      />
      <Button text="Login" variant="sign-in" type={"submit"} />
    </form>
  );
}
