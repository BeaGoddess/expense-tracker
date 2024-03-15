import TitleBar from "./TitleNavbar";
import Tabs from "./Tabs";

export default function NavBar() {
  return (
    <div className="w-[60px] md:w-[280px] text-white bg-gradient-to-b from-[#8E8CDA] to-[#C0BAFF] p-3 flex flex-col duration-200">
      <TitleBar />
      <Tabs />
    </div>
  );
}
