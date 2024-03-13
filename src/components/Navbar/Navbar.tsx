import TitleBar from "./TitleNavbar";

export default function NavBar() {
  return (
    <div className="w-[280px] text-white h-full bg-gradient-to-b from-[#8E8CDA] to-[#C0BAFF] p-6 ">
      <TitleBar />
      <div className="my-4 font-medium">
        <div className="flex p-2 gap-4">
          <div> 🏠 </div>
          <div> Home </div>
        </div>
      </div>

      <div className="my-4 font-bold bg-white text-[#7574C7] rounded-md">
        <div className="flex p-2 gap-4">
          <div> 💳 </div>
          <div> Wallets </div>
        </div>
      </div>

      <div className="my-4 font-medium">
        <div className="flex p-2 gap-4">
          <div> 💰 </div>
          <div> Transactions </div>
        </div>
      </div>

      <div className="my-4 font-medium">
        <div className="flex p-2 gap-4">
          <div> 💃🏼 </div>
          <div> Profile </div>
        </div>
      </div>
    </div>
  );
}
