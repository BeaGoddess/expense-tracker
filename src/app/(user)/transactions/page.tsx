"use client";

import TransactionsTable from "@/components/Tables/TransactionsTable";
import TitleUser from "@/components/Titles/TitleUser";
import { useCategories } from "@/hooks/useCategories";
import { useExpenses } from "@/hooks/useExpenses";
import { Container, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TransactionsPage() {
  const [loading, setLoading] = useState(true);
  const { categories, getCategories } = useCategories();
  const { expenses, getExpenses } = useExpenses();

  useEffect(() => {
    const fetchData = async () => {
      await getCategories();
      await getExpenses();
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleData = async () => {
    await getExpenses();
  };

  const renderContent = () => {
    if (loading) {
      return (
        <Container maxW="container.xl" px={"24px"} my={2} centerContent>
          <Spinner color="#7574C7" />
        </Container>
      );
    }

    return <TransactionsTable expenses={expenses} onDelete={handleData} />;
  };

  return (
    <Flex mt={{ base: 8, sm: 20 }} flex={1} direction={"column"}>
      <TitleUser value="transactions" onCreate={handleData} />
      {renderContent()}
    </Flex>
  );
}
