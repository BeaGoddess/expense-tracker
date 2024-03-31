"use client";

import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

interface DeleteWalletAlertProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  isLoading: boolean;
  title: string;
  description: string;
}

const AlertDelete: React.FC<DeleteWalletAlertProps> = ({
  isOpen,
  onClose,
  onDelete,
  isLoading,
  title,
  description
}) => {
  const leastDestructiveRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      size={"lg"}
      isCentered
      isOpen={isOpen}
      leastDestructiveRef={leastDestructiveRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>
            {description}
            
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={leastDestructiveRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={onDelete}
              ml={3}
              isLoading={isLoading}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default AlertDelete;
