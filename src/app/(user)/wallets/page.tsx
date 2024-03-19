import TitleUser from "@/components/Titles/TitleUser";
import WalletsNotFound from "@/components/NotFound/WalletsNotFound";
import WalletsTable from "@/components/Tables/WalletsTable";

export default function WalletsPage() {
  return (
    <div className="mt-8 sm:mt-20 flex-1 flex flex-col sm:gap-16 gap-10">
      <TitleUser value="wallets" />
      <WalletsTable />
    </div>
  );
}
