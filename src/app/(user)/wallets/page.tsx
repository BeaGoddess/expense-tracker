"use client";

import { Container, Flex, Spinner } from "@chakra-ui/react";
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
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <Container maxW="container.xl" px={"24px"} centerContent>
          <Spinner color="#7574C7" />
        </Container>
      );
    } else if (wallets?.length > 0) {
      return <WalletsTable wallets={wallets} />;
    } else {
      return <WalletsNotFound />;
    }
  };

  return (
    <Flex mt={{ base: 8, sm: 20 }} flex={1} direction={"column"}>
      <TitleUser value="wallets" />
      {renderContent()}
    </Flex>
  );
}
