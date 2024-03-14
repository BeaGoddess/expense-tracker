import TitleBar from "./TitleNavbar";
import Tabs from "./Tabs";

export default function NavBar() {
  return (
    <div className="w-[280px] text-white bg-gradient-to-b from-[#8E8CDA] to-[#C0BAFF] p-6 flex flex-col">
      <TitleBar />
      <Tabs />
    </div>
  );
}
