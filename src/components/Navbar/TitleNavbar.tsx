import { Bars3Icon } from "@heroicons/react/24/outline";

export default function TitleBar() {
  return (
    <div className="flex mt-8 mb-12">
      <div className="font-bold text-4xl leading-tight text-white hidden md:block">
        <span className="text-[#7574C7]">E</span>xpense{" "}
        <span className="text-[#7574C7]">T</span>racker
      </div>

      <Bars3Icon className="h-8 w-8 mt-2 text-white stroke-[3px] m-auto" />
    </div>
  );
}
