"use client";

import Button from "@/components/Button/Button";
import { signout } from "../(auth)/action";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-end m-2">
        <Button
          text="Sign out"
          variant={"auth"}
          style={{ width: "150px" }}
          onClick={() => signout()}
        />
      </div>

      <div className="flex-1 flex justify-center items-center text-[105px] text-center">
        🐼 Still in development 🚧
      </div>
    </div>
  );
}
