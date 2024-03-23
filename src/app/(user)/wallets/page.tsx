"use client";

import TitleUser from "@/components/Titles/TitleUser";
import WalletsNotFound from "@/components/NotFound/WalletsNotFound";
import WalletsTable from "@/components/Tables/WalletsTable";
import { useWallets } from "@/hooks/useWallets";
import { useEffect, useState } from "react";

export default function WalletsPage() {
  const [loading, setLoading] = useState(true);
  const { wallets, getWalles } = useWallets();

  useEffect(() => {
    const fetchData = async () => {
      await getWalles();
      setLoading(false);
    };

    fetchData();
  }, [getWalles]);

  const renderContent = () => {
    if (loading) {
      return <div>Loading</div>;
    } else if (wallets?.length > 0) {
      return <WalletsTable wallets={wallets} />;
    } else {
      return <WalletsNotFound />;
    }
  };

  return (
    <div className="mt-8 sm:mt-20 flex-1 flex flex-col sm:gap-16 gap-10">
      <TitleUser value="wallets" />
      {renderContent()}
    </div>
  );
}
