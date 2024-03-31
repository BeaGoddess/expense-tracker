"use client";

import TransactionsTable from "@/components/Tables/TransactionsTable";
import TitleUser from "@/components/Titles/TitleUser";
import { useCategories } from "@/hooks/useCategories";
import { useEarnings } from "@/hooks/useEarnings";
import { useExpenses } from "@/hooks/useExpenses";
import { Tables } from "@/types/type";
import { Container, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Merged = Tables<"categories"> &
  Tables<"earnings"> & { categoryName: string; type: "expense" | "earning" };

export default function TransactionsPage() {
  const [loading, setLoading] = useState(true);
  const { categories, getCategories } = useCategories();
  const { expenses, getExpenses } = useExpenses();
  const { earnings, getEarnings } = useEarnings();

  const getMergedData = () => {
    const mergedExpenses = expenses
      .map((expense) => {
        const category = categories.find(
          (cat) => cat.id === expense.category_id
        );
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
      .filter((item) => item !== null) as Merged[];

    const mergedEarnings = earnings
      .map((earning) => {
        const category = categories.find(
          (cat) => cat.id === earning.category_id
        );
        if (category) {
          return {
            ...category,
            ...earning,
            categoryName: category.name,
            type: "earning",
          };
        }
        return null;
      })
      .filter((item) => item !== null) as Merged[];

    const mergedData: Merged[] = mergedEarnings
      .concat(mergedExpenses)
      .sort((a: Merged, b: Merged) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });

    return mergedData;
  };

  useEffect(() => {
    const fetchData = async () => {
      await getCategories();
      await getExpenses();
      await getEarnings();
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleData = async () => {
    try {
      await Promise.all([getExpenses(), getEarnings()]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <Container maxW="container.xl" px={"24px"} my={2} centerContent>
          <Spinner color="#7574C7" />
        </Container>
      );
    }

    return <TransactionsTable data={getMergedData()} onDelete={handleData} />;
  };

  return (
    <Flex
      mt={{ base: 8, sm: 20 }}
      flex={1}
      direction={"column"}
      h="auto"
    >
      <TitleUser value="transactions" onCreate={handleData} />
      {renderContent()}
    </Flex>
  );
}
