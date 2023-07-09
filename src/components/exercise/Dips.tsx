import React from "react";
import { FormControl, FormGroup, FormLabel } from "@mui/material";
import CheckboxInput from "@/components/CheckBoxInput";

const Dips = () => {
  return (
    <>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel
          component="legend"
          sx={{ fontWeight: 700, fontSize: 20, color: "black" }}
        >
          딥스
        </FormLabel>
        <CheckboxInput label={`1세트 가능한한 많이`} field={`dips`} />
      </FormControl>
    </>
  );
};

export default Dips;
