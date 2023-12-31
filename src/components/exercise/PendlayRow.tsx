import React from "react";
import { FormControl, FormGroup, FormLabel } from "@mui/material";
import CheckboxInput from "@/components/CheckBoxInput";

interface PendlayRowProps {
  pendlayRow: {
    1: { weight: number; count: number };
    2: { weight: number; count: number };
    3: { weight: number; count: number };
    4: { weight: number; count: number };
    5: { weight: number; count: number };
  };
}
const PendlayRow = (props: PendlayRowProps) => {
  const { pendlayRow } = props;
  return (
    <>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel
          component="legend"
          sx={{ fontWeight: 700, fontSize: 20, color: "black" }}
        >
          펜들레이로우
        </FormLabel>
        <FormGroup>
          {Object.entries(pendlayRow).map(([key, obj]) => {
            const { count, weight } = obj;
            return (
              <CheckboxInput
                key={key}
                label={`${weight}Kg ${count}${key === "repeat" ? "" : "개"} ${
                  (weight - 20) / 2
                }kg`}
                field={`pendlayRow.${key}`}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </>
  );
};

export default PendlayRow;
