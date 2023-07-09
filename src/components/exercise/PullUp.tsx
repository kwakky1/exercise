import React from "react";
import { FormControl, FormLabel } from "@mui/material";
import CheckboxInput from "@/components/CheckBoxInput";

const PullUp = () => {
  return (
    <>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel
          component="legend"
          sx={{ fontWeight: 700, fontSize: 20, color: "black" }}
        >
          풀업
        </FormLabel>
        <CheckboxInput label={`3세트 가능한한 많이`} field={`pullUp`} />
      </FormControl>
    </>
  );
};

export default PullUp;
