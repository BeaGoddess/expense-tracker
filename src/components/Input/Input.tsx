import { forwardRef } from "react";

type InputProps = {
  name: string;
  variant?: "warned" | "info" | "sign-in";
} & React.ComponentPropsWithoutRef<"input">;

const getInputClasses = (variant?: string): string => {
  let className = "p-2 w-full focus:outline-none ";

  switch (variant) {
    case "sign-in":
      className +=
        " bg-[#AEA9F2]/20 rounded-lg mb-4 text-gray-500 text-sm pl-4";
      break;

    default:
      className += " bg-black text-white";
      break;
  }

  return className;
};

const Input = forwardRef<HTMLInputElement | null, InputProps>(
  ({ name, variant, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={getInputClasses(variant)}
        name={name}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
