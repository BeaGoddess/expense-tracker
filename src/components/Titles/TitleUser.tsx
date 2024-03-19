import Button from "../Button/Button";

interface TitleUserProps {
  value: "wallets" | "transactions" | "profile";
}

export default function TitleUser({ value }: TitleUserProps) {
  return (
    <div className="ml-10 bg-[#C0BAFF] py-2 pl-3 sm:py-4 sm:pl-8 rounded-l-lg flex justify-between">
      <span className="text-[#7574C7] font-bold text-2xl sm:text-4xl capitalize">
        {value}
      </span>
      <Button variant={"create"} text="Create"  />
    </div>
  );
}
