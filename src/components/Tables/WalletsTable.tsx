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
};

export default function WalletsTable({ wallets }: WalletsProps) {
  const { deleteWallet } = useWallets();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedWalletId, setSelectedWalletId] = useState<number>();

  const onDeleteClick = (walletId: number) => {
    setSelectedWalletId(walletId);
    onOpen();
  };

  const handleDelete = () => {
    if (selectedWalletId) {
      deleteWallet(selectedWalletId);
    }
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
            <Th px={"1rem"} py={"0.75rem"} w={"2/3"}>
              Name
            </Th>
            <Th px={"1rem"} py={"0.75rem"}>
              Balance
            </Th>
            <Th px={"1rem"} py={"0.75rem"} w={"40px"}></Th>
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
                <Td px={"1rem"} py={"0.75rem"}>
                  {item.name}
                </Td>
                <Td px={"1rem"} py={"0.75rem"}>
                  {item.balance}
                </Td>
                <Td px={"1rem"} py={"0.75rem"}>
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
      />
    </Container>
  );
}
