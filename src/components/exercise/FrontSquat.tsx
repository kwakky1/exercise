import React from "react";
import { FormControl, FormGroup, FormLabel } from "@mui/material";
import CheckboxInput from "@/components/CheckBoxInput";

interface FrontSquatProps {
  frontSquat: {
    1: { weight: number; count: number };
    2: { weight: number; count: number };
    3: { weight: number; count: number };
    repeat: { weight: number; count: string };
  };
}
const FrontSquat = (props: FrontSquatProps) => {
  const { frontSquat } = props;
  return (
    <>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel
          component="legend"
          sx={{ fontWeight: 700, fontSize: 20, color: "black" }}
        >
          프론트 스쿼트
        </FormLabel>
        <FormGroup>
          {Object.entries(frontSquat).map(([key, obj]) => {
            const { count, weight } = obj;
            return (
              <CheckboxInput
                key={key}
                label={`${weight}Kg ${count}${key === "repeat" ? "" : "개"} ${
                  (weight - 20) / 2
                }kg`}
                field={`frontSquat.${key}`}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </>
  );
};

export default FrontSquat;
