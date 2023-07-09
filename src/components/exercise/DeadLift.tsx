"use client";

import { FormControl, FormGroup, FormLabel } from "@mui/material";

interface DeadLiftProps {
  deadLift: {
    1: { weight: number; count: number };
    2: { weight: number; count: number };
    3: { weight: number; count: number };
    4: { weight: number; count: number };
  };
}

import React from "react";
import CheckboxInput from "@/components/CheckBoxInput";

const DeadLift = (props: DeadLiftProps) => {
  const { deadLift } = props;
  return (
    <>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel
          component="legend"
          sx={{ fontWeight: 700, fontSize: 20, color: "black" }}
        >
          데드 리프트
        </FormLabel>
        <FormGroup>
          {Object.entries(deadLift).map(([key, obj]) => {
            const { count, weight } = obj;
            return (
              <CheckboxInput
                key={key}
                label={`${weight}kg ${count}개 ${(weight - 20) / 2}kg`}
                field={`deadLift.${key}`}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </>
  );
};

export default DeadLift;
