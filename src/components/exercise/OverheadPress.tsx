import React from "react";
import { FormControl, FormGroup, FormLabel } from "@mui/material";
import CheckboxInput from "@/components/CheckBoxInput";

interface OverheadPressProps {
  overheadPress: {
    1: { weight: number; count: number };
    2: { weight: number; count: number };
    3: { weight: number; count: number };
    4: { weight: number; count: number };
    repeat: { weight: number; count: string };
  };
}
const OverheadPress = (props: OverheadPressProps) => {
  const { overheadPress } = props;

  return (
    <>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel
          component="legend"
          sx={{ fontWeight: 700, fontSize: 20, color: "black" }}
        >
          오버헤드 프레스
        </FormLabel>
        <FormGroup>
          {Object.entries(overheadPress).map(([key, obj]) => {
            const { count, weight } = obj;
            return (
              <CheckboxInput
                key={key}
                label={`${weight}Kg ${count}${key === "repeat" ? "" : "개"} ${
                  (weight - 20) / 2
                }kg`}
                field={`deadLift.${key}`}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </>
  );
};

export default OverheadPress;
