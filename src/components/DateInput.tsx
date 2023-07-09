import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import "dayjs/locale/ko";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";

type DateInputProps = {
  value: Dayjs | null;
  setValue: (Date: Dayjs | null) => void;
  label: string;
};

export default function DateInput(props: DateInputProps) {
  const { value, label, setValue } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ko"}>
      <DesktopDatePicker
        value={value || null}
        label={label}
        onChange={(date) => setValue(date || null)}
        slotProps={{
          textField: {
            fullWidth: true,
          },
        }}
      />
    </LocalizationProvider>
  );
}
