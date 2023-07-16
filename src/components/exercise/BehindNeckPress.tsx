import React from "react";
import { FormControl, FormLabel } from "@mui/material";
import CheckboxInput from "@/components/CheckBoxInput";

const BehindNeckPress = () => {
  return (
    <>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel
          component="legend"
          sx={{ fontWeight: 700, fontSize: 20, color: "black" }}
        >
          비하인드 넥프레스
        </FormLabel>
        <CheckboxInput label={`10회 3세트`} field={`behindNeckPress`} />
      </FormControl>
    </>
  );
};

export default BehindNeckPress;
