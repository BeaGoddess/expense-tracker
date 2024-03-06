import { forwardRef } from "react";

type ButtonProps = {
  text: string;
  variant?: "warned" | "info" | "sign-in";
} & React.ComponentPropsWithoutRef<"div">;

const getButtonClasses = (variant?: string): string => {
  let className = "focus:outline-none cursor-pointer";

  switch (variant) {
    case "warned":
      className += " bg-white text-black border border-gray-300";
      break;

    case "info":
      className += " bg-blue-400 text-white";
      break;

    case "sign-in":
      className +=
        " bg-[#7574C7] p-2 w-full rounded-3xl mb-4 text-white text-sm text-center font-bold hover:bg-[#AEA9F2] duration-700";
      break;

    default:
      className += " bg-black text-white";
      break;
  }

  return className;
};

const Button = forwardRef<HTMLDivElement | null, ButtonProps>(
  ({ text, variant, ...props }, ref) => {
    return (
      <div ref={ref} className={getButtonClasses(variant)} {...props}>
        {text}
      </div>
    );
  }
);

export default Button;