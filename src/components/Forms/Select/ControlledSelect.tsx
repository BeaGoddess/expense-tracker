import {
  useController,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";

import {
  Select,
  Props,
  chakraComponents,
  SelectComponent,
  OptionProps,
  OptionBase,
} from "chakra-react-select";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
} from "@chakra-ui/react";

import React, { FC } from "react";
import { getIconComponent } from "@/types/category";

type ControlledSelectProps = Omit<UseControllerProps, "defaultValue"> &
  Props & {
    label: string;
  };

export const ControlledSelect = ({
  control,
  name,
  label,
  rules,
  ...props
}: ControlledSelectProps) => {
  const methods = useFormContext();

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control: methods.control,
    rules,
  });

  const customComponents: Partial<SelectComponent> = {
    Option: (props: OptionProps) => (
      <chakraComponents.Option {...props}>
        <IconOption data={props.data} />
        {props.children}
      </chakraComponents.Option>
    ),
  };

  const IconOption = ({ data }: { data: any }) => {
    if ("icon" in data) {
      const IconComponent = getIconComponent(data.icon);

      return <IconComponent size={15} style={{ marginRight: 6 }} />;
    }

    return null;
  };

  return (
    <FormControl isInvalid={!!error} isRequired>
      <FormLabel
        textTransform={"uppercase"}
        fontSize={"sm"}
        fontWeight={"semibold"}
      >
        {label}
      </FormLabel>

      <Select
        useBasicStyles
        components={customComponents}
        chakraStyles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: "rgba(192, 186, 255, 0.15)",
            borderColor: "#7574C7",
            color: "black",
            _focus: {
              borderColor: "#7574C7",
            },
          }),
          option: (provided) => ({
            ...provided,
            fontSize: "sm",
          }),
          placeholder: (provided) => ({
            ...provided,
            color: "gray.400",
          }),
        }}
        selectedOptionStyle={"color"}
        selectedOptionColorScheme="purple"
        variant={"outline"}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        {...props}
      />

      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};
