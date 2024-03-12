import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

type InputProps = {
  name: string;
  variant?: "warned" | "info" | "auth";
} & React.ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof intupVariants>;

const intupVariants = cva("p-2 w-full focus:outline-none", {
  variants: {
    variant: {
      auth: "bg-[#AEA9F2]/20 rounded-lg mb-4 text-gray-500 text-sm pl-4",
    },
    defaultVariants: {
      variant: "bg-black text-white",
    },
  },
});

const Input = forwardRef<HTMLInputElement | null, InputProps>(
  ({ name, variant, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(intupVariants({ variant, className }))}
        name={name}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
