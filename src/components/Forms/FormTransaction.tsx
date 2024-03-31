"use client";
import { ModalBody, Box, ModalFooter, Button, Grid } from "@chakra-ui/react";
import { OptionBase } from "chakra-react-select";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useWallets } from "@/hooks/useWallets";
import { useExpenses } from "@/hooks/useExpenses";
import { useEarnings } from "@/hooks/useEarnings";
import { useCategories } from "@/hooks/useCategories";
import { useEffect } from "react";
import { ControlledSelect } from "./Select/ControlledSelect";
import InputForm from "./Input/InputForm";

interface Option extends OptionBase {
  value: string;
  label: string;
}

interface FormValues {
  wallet: Option;
  type: Option;
  category: Option;
  date: string;
  name: string;
  value: number;
}

interface FormTransactionProps {
  onClose: () => void;
  onCreate: () => void;
}

export default function FormTransaction({
  onClose,
  onCreate,
}: FormTransactionProps) {
  const methods = useForm<FormValues>();

  const { createExpense } = useExpenses();
  const { createEarnings } = useEarnings();
  const { categories, getCategories } = useCategories();
  const { wallets, getWallets } = useWallets();

  useEffect(() => {
    const fetchData = async () => {
      await getCategories();
      await getWallets();
    };

    fetchData();
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {

    const newData = {
      wallet_id: parseInt(data.wallet.value),
      category_id: parseInt(data.category.value),
      name: data.name,
      value: data.value,
      date: data.date,
    };

    const response =
      data.type.value === "earning"
        ? await createEarnings(newData)
        : await createExpense(newData);

    if (response?.success) {
      onCreate();
      onClose();
    }
  };

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <ModalBody>
          <Grid
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={3}
          >
            {/* -------- WALLET -------- */}
            <ControlledSelect
              name="wallet"
              options={wallets.map((item) => {
                return { label: item?.name, value: item?.id.toString() };
              })}
              placeholder="Select a wallet"
              label="Wallet"
              rules={{ required: "Please select a wallet." }}
            />

            {/* -------- TYPE -------- */}
            <ControlledSelect
              name="type"
              options={[
                { label: "Expense", value: "expense" },
                { label: "Earning", value: "earning" },
              ]}
              placeholder="Select a type"
              label="Type"
              rules={{ required: "Please select a type." }}
            />

            {/* -------- CATEGORY -------- */}
            <ControlledSelect
              name="category"
              options={categories.map((item) => {
                return {
                  label: item?.name,
                  value: item?.id.toString(),
                  color: item?.color,
                  icon: item?.icon,
                };
              })}
              placeholder="Select a category"
              label="Category"
              rules={{ required: "Please select a category." }}
            />

            {/* -------- DATE -------- */}
            <InputForm
              name="date"
              placeholder="Date"
              label={"Date"}
              type="date"
            />

            {/* -------- NAME -------- */}
            <InputForm
              name="name"
              placeholder="Name"
              label={"Name"}
              type="text"
            />

            {/* -------- VALUE -------- */}
            <InputForm
              name="value"
              step="0.01"
              placeholder="Value"
              label={"Value"}
              type="number"
            />
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="ghost"
            fontSize="sm"
            rounded="3xl"
            w={"150px"}
            color="#7574C7"
            onClick={onClose}
            mr={3}
          >
            Cancel
          </Button>
          <Button
            isLoading={methods.formState.isSubmitting}
            disabled={methods.formState.isSubmitting}
            bg="#7574C7"
            w={"150px"}
            color="white"
            rounded="3xl"
            fontSize="sm"
            fontWeight="bold"
            textAlign="center"
            _hover={{
              bg: "#AEA9F2",
            }}
            type="submit"
          >
            Create
          </Button>
        </ModalFooter>
      </Box>
    </FormProvider>
  );
}
