"use client";

import TransactionsTable from "@/components/Tables/TransactionsTable";
import TitleUser from "@/components/Titles/TitleUser";
import { useCategories } from "@/hooks/useCategories";
import { useExpenses } from "@/hooks/useExpenses";
import { Tables } from "@/types/type";
import { Container, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TransactionsPage() {
  const [loading, setLoading] = useState(true);
  const { categories, getCategories } = useCategories();
  const { expenses, getExpenses } = useExpenses();

  const mergedData = expenses
    .map((expense) => {
      const category = categories.find((cat) => cat.id === expense.category_id);
      if (category) {
        return {
          ...category,
          ...expense,
          categoryName: category.name,
          type: "expense",
        };
      }
      return null;
    })
    .filter((item) => item !== null) as (Tables<"categories"> &
    Tables<"expenses"> & { categoryName: string; type: string })[];

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

  console.log(categories);

  const renderContent = () => {
    if (loading) {
      return (
        <Container maxW="container.xl" px={"24px"} my={2} centerContent>
          <Spinner color="#7574C7" />
        </Container>
      );
    }

    return <TransactionsTable data={mergedData} onDelete={handleData} />;
  };

  return (
    <Flex mt={{ base: 8, sm: 20 }} flex={1} direction={"column"}>
      <TitleUser value="transactions" onCreate={handleData} />
      {renderContent()}
    </Flex>
  );
}
