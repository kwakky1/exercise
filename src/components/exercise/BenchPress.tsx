import React from "react";
import { FormControl, FormGroup, FormLabel } from "@mui/material";
import CheckboxInput from "@/components/CheckBoxInput";

interface BenchPressProps {
  benchPress: {
    1: { weight: number; count: number };
    2: { weight: number; count: number };
    3: { weight: number; count: number };
    4: { weight: number; count: number };
    5: { weight: number; count: number };
  };
}
const BenchPress = (props: BenchPressProps) => {
  const { benchPress } = props;
  return (
    <>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel
          component="legend"
          sx={{ fontWeight: 700, fontSize: 20, color: "black" }}
        >
          벤치프레스
        </FormLabel>
        <FormGroup>
          {Object.entries(benchPress).map(([key, obj]) => {
            const { count, weight } = obj;
            return (
              <CheckboxInput
                key={key}
                label={`${weight}Kg ${count}${key === "repeat" ? "" : "개"} ${
                  (weight - 20) / 2
                }kg`}
                field={`benchPress.${key}`}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </>
  );
};

export default BenchPress;
