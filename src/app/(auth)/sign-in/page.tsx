"use client";

import Button from "@/components/Button/Button";

const onSubmit = () => {

};

export default function SignInPage() {
  return (
    <div className="bg-white rounded-b-xl md:rounded-r-xl md:rounded-bl-none text-black p-8 md:p-16 md:w-full md:max-w-[50%] flex flex-col justify-center items-center">
      <div className="font-bold text-2xl mb-6"> Sign in </div>

      <div className="bg-[#AEA9F2]/20 p-2 w-full rounded-lg mb-4">
        <span className="ml-2 text-gray-500 text-sm">Username</span>
      </div>

      <div className="bg-[#AEA9F2]/20 p-2 w-full rounded-lg mb-4">
        <span className="ml-2 text-gray-500 text-sm">Password</span>
      </div>

      <Button text="Login" variant="sign-in" onClick={onSubmit} />

      <div className="text-gray-500 text-sm mt-1">
        Don’t have an account? Sign up
      </div>
    </div>
  );
}
