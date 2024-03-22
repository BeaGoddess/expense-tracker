import Button from "../Button/Button";

interface TitleUserProps {
  value: "wallets" | "transactions" | "profile";
}

export default function TitleUser({ value }: TitleUserProps) {
  return (
    <div className="bg-[#C0BAFF] py-2 sm:py-4 flex ">
      <div className="container mx-auto flex justify-between px-6">
        <span className="text-[#7574C7] font-bold text-2xl sm:text-4xl capitalize">
          {value}
        </span>
        <Button variant={"create"} text="Create" />
      </div>
    </div>
  );
}
