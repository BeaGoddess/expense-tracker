import FormSignUp from "@/components/Forms/FormSignUp";

export default function SignInPage() {
  return (
    <div className="bg-white rounded-b-xl md:rounded-r-xl md:rounded-bl-none text-black p-8 md:p-16 md:w-full md:max-w-[50%] flex flex-col justify-center items-center">
      <div className="font-bold text-2xl mb-6"> Sign up </div>

      <FormSignUp />

      <div className="text-gray-500 text-sm mt-1">
        Already have an account? <a href="./sign-in" className="underline text-[#7574C7] font-semibold">Sign in</a>
      </div>
    </div>
  );
}
