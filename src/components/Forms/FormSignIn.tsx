import { signin } from "@/app/(auth)/sign-in/action";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";


export default function FormSignIn() {
  return (
    <form action={signin}>
      <Input type="email" name="email" placeholder="Email" variant="sign-in" />

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
