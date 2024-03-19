import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva("focus:outline-none cursor-pointer", {
  variants: {
    variant: {
      warned: "bg-white text-black border border-gray-300",
      info: "bg-blue-400 text-white",
      auth: "bg-[#7574C7] p-2 w-full rounded-3xl mb-4 text-white text-sm text-center font-bold hover:bg-[#AEA9F2] duration-700",
      create: "p-1 sm:p-2 bg-white rounded-lg w-[100px] sm:w-[150px] text-center font-bold sm:text-base text-sm mx-6 items-center flex justify-center"
    },
    defaultVariants: {
      variant: "bg-black text-white",
    },
  },
});

const Button = forwardRef<HTMLButtonElement | null, ButtonProps>(
  ({ text, variant, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        {...props}
      >
        {text}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
