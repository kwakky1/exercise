"use client";

import { Box, Container, Typography } from "@mui/material";
import programSetting from "@/app/utils/programSetting";
import DateInput from "@/components/DateInput";
import { useState } from "react";
import record from "../scripts/record";
import weekOfYear from "dayjs/plugin/weekOfYear";
import dayjs, { Dayjs } from "dayjs";
import SecondProgram from "@/components/SecondProgram";
import FirstProgram from "@/components/FirstProgram";

dayjs.extend(weekOfYear);

export default function Home() {
  const program = programSetting();

  const [date, setDate] = useState<Dayjs | null>(dayjs());

  const { startDate } = record;

  // 시작 날짜의 주가 1이고 그 시작
  const firstWeek = dayjs(startDate).week();

  const currentWeek = dayjs(date).week() - firstWeek + 1;
  let currentDays: "first" | "second" | "third" | undefined;
  if (dayjs(date).day() === 1) {
    currentDays = "first";
  } else if (dayjs(date).day() === 3) {
    currentDays = "second";
  } else if (dayjs(date).day() === 4) {
    currentDays = "third";
  }

  // first 1 second 3 third 4
  if (currentDays && currentWeek > 0 && currentWeek < 13) {
    Object.entries(program[currentWeek][currentDays]).map(
      ([key, value], index) => {
        if (index === 0) {
          console.log(key, value);
        }
      }
    );
  }

  return (
    <Container disableGutters={true} maxWidth={"sm"}>
      <Box p={1}>
        <Box py={3}>
          <Typography variant={"h5"}>매드게르만 훈련 프로그램</Typography>
        </Box>
        <DateInput value={date} setValue={setDate} label={"날짜"} />
        {currentDays === "first" && (
          <FirstProgram program={program[currentWeek][currentDays]} />
        )}
        {currentDays === "second" && (
          <SecondProgram program={program[currentWeek][currentDays]} />
        )}
      </Box>
    </Container>
  );
}
