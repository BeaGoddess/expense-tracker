import FormSignIn from "@/components/Forms/FormSignIn";

export default function SignInPage() {
  return (
    <div className="bg-white rounded-b-xl md:rounded-r-xl md:rounded-bl-none text-black p-8 md:p-16 md:w-full md:max-w-[50%] flex flex-col justify-center items-center">
      <div className="font-bold text-2xl mb-6"> Sign in </div>

      <FormSignIn />

      <div className="text-gray-500 text-sm mt-1">
        Don’t have an account? <a href="./sign-up" className="underline text-[#7574C7] font-semibold">Sign up</a>
      </div>
    </div>
  );
}
