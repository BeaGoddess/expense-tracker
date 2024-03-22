"use client";

import useWallets from "@/hooks/wallets";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function WalletsTable() {
  const { data: wallets, isLoading, isError } = useWallets();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="flex-1 flex justify-center items-start px-6 container mx-auto">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-[#e6e4fd] uppercase text-base text-left">
            <th className="py-3 px-4 w-2/3">Name</th>
            <th className="py-3 px-4">Balance</th>
            <th className="py-3 px-4 w-[40px]"></th>
          </tr>
        </thead>
        <tbody className="text-gray-500">
          {wallets?.map((item, index) => {
            return (
              <tr
                key={index}
                className={
                  index % 2 !== 0
                    ? "bg-[#e6e4fd]/30 border-t border-b border-[#7574C7]"
                    : ""
                }
              >
                <td className="py-3 px-4"> {item.name}</td>
                <td className="py-3 px-4"> {item.balance}€</td>
                <td className="py-3 px-4 flex justify-end">
                  <TrashIcon className="h-5 w-5" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
