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
} from "@chakra-ui/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Tables } from "@/types/type";
import { useWallets } from "@/hooks/useWallets";
import AlertDelete from "../Modal/AlertDelete";
import { useState } from "react";

type WalletsProps = {
  wallets: Tables<"wallets">[];
  onDelete: () => void;
};

export default function WalletsTable({ wallets, onDelete }: WalletsProps) {
  const { deleteWallet } = useWallets();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedWalletId, setSelectedWalletId] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);

  const onDeleteClick = (walletId: number) => {
    setSelectedWalletId(walletId);
    onOpen();
  };

  const handleDelete = async () => {
    setIsLoading(true);

    if (selectedWalletId) {
      await deleteWallet(selectedWalletId);
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
            <Th p={3} w={"2/3"}>
              Name
            </Th>
            <Th p={3}>Balance</Th>
            <Th p={3} w={"40px"}></Th>
          </Tr>
        </Thead>
        <Tbody textColor={"gray"}>
          {wallets?.map((item, index) => {
            return (
              <Tr
                key={index}
                bg={"#e6e4fd/ 0.3"}
                borderTop={"1px"}
                borderBottom={"1px"}
                borderColor={"#7574C7"}
              >
                <Td p={3}>{item.name}</Td>
                <Td p={3}>{item.balance}€</Td>
                <Td p={3}>
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
        title="Delete Wallet"
        description="Are you sure you want to delete this wallet?"
        isOpen={isOpen}
        onClose={onClose}
        onDelete={() => handleDelete()}
        isLoading={isLoading}
      />
    </Container>
  );
}
