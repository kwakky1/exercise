"use client";

interface CheckboxInputProps {
  label: string;
  field: string;
}

import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const CheckboxInput = (props: CheckboxInputProps) => {
  const { field, label } = props;
  const { control } = useFormContext();
  return (
    <Controller
      name={field}
      control={control}
      render={({ field: { value, onChange } }) => {
        return (
          <>
            <FormControlLabel
              control={
                <Checkbox
                  checked={value || false}
                  onChange={onChange}
                  onClick={(e) => e.stopPropagation()}
                />
              }
              label={
                <Typography
                  color={"#8B8B8B"}
                  fontSize={12}
                  onClick={(e) => e.stopPropagation()}
                >
                  {label}
                </Typography>
              }
            />
          </>
        );
      }}
    />
  );
};

export default CheckboxInput;
