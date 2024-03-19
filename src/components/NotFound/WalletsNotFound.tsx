import Image from "next/image";
import ImageNotFound from "../../../public/user/wallets-not-found.png";

export default function WalletsNotFound() {
  return (
    <div className="text-black flex-1 flex flex-col justify-center items-center">
      <Image src={ImageNotFound || ""} width={350} alt="Not found" />

      <div className="font-bold text-xl mb-2"> No Wallets Found </div>

      <div className="leading-7 w-[350px] text-center">
        It seems you haven't created a wallet yet... <br /> Start to create one.
      </div>
    </div>
  );
}
