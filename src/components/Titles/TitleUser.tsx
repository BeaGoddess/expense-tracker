interface TitleUserProps {
  value: "wallets" | "transactions" | "profile";
}

export default function TitleUser({ value }: TitleUserProps) {
  return (
    <div className="bg-[#C0BAFF] py-2 pl-3 sm:py-4 sm:pl-8 rounded-l-lg flex justify-between">
      <span className="text-[#7574C7] font-bold text-2xl sm:text-4xl capitalize">
        {value}
      </span>
      <div className="p-1 sm:p-2 bg-white rounded-lg w-[100px] sm:w-[150px] text-center font-bold sm:text-base text-sm mx-6 items-center flex justify-center">
        Create
      </div>
    </div>
  );
}
