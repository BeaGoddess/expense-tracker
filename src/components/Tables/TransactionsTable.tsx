"use client";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Container,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Tables } from "@/types/type";
import AlertDelete from "../Modal/AlertDelete";
import { useState } from "react";
import { useExpenses } from "@/hooks/useExpenses";
import TextDetails from "../Category/TextDetails";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

type TransactionsProps = {
  data: (Tables<"categories"> &
    Tables<"expenses"> & { categoryName: string; type: string })[];
  onDelete: () => void;
};

export default function TransactionsTable({
  data,
  onDelete,
}: TransactionsProps) {
  const { deleteExpense } = useExpenses();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);

  const onDeleteClick = (id: number) => {
    setSelected(id);
    onOpen();
  };

  const handleDelete = async () => {
    setIsLoading(true);

    if (selected) {
      await deleteExpense(selected);
    }

    setIsLoading(false);
    onDelete();
    onClose();
  };

  return (
    <Container maxW="container.xl" px={"24px"} mt={8} centerContent>
      <Table variant="striped" size={"lg"}>
        <Thead>
          <Tr
            bg={"#e6e4fd"}
            textTransform={"uppercase"}
            fontSize={"16px"}
            textAlign={"left"}
          >
            <Th px={"1rem"} py={"0.75rem"}>
              Category
            </Th>

            <Th px={"1rem"} py={"0.75rem"}>
              Name
            </Th>

            <Th px={"1rem"} py={"0.75rem"}>
              Value
            </Th>

            <Th px={"1rem"} py={"0.75rem"} w={"40px"}></Th>
          </Tr>
        </Thead>
        <Tbody textColor={"gray"}>
          {data?.map((item, index) => {
            return (
              <Tr
                key={index}
                bg={"#e6e4fd/ 0.3"}
                borderTop={"1px"}
                borderBottom={"1px"}
                borderColor={"#7574C7"}
              >
                <Td p={2}>
                  <TextDetails
                    name={item?.categoryName}
                    icon={item?.icon}
                    color={item?.color}
                    date={item?.date}
                  />
                </Td>

                <Td p={2}>{item.name}</Td>

                <Td p={2}>
                  <Stack direction={"row"} align={"center"}>
                    {item.type === "expense" ? (
                      <IoMdArrowDropdown color="red" size={20} />
                    ) : (
                      <IoMdArrowDropup color="green" size={20} />
                    )}

                    <Text>{item.value}€</Text>
                  </Stack>
                </Td>

                <Td p={2}>
                  <TrashIcon
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => onDeleteClick(item.id)}
                  />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      <AlertDelete
        isOpen={isOpen}
        onClose={onClose}
        onDelete={() => handleDelete()}
        isLoading={isLoading}
      />
    </Container>
  );
}
