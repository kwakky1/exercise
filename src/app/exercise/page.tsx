"use client";

import React, { useState } from "react";
import programSetting from "@/app/utils/programSetting";
import dayjs, { Dayjs } from "dayjs";
import records from "@/scripts/record";
import { Container } from "@mui/material";
import DateInput from "@/components/DateInput";
import FirstProgram from "@/components/FirstProgram";
import SecondProgram from "@/components/SecondProgram";
import weekOfYear from "dayjs/plugin/weekOfYear";
import ThirdProgram from "@/components/ThirdProgram";
import { useRecoilValue } from "recoil";
import authAtom from "@/state/atoms/authAtom";
import { getCookie } from "cookies-next";

dayjs.extend(weekOfYear);

const Page = () => {
  const auth = getCookie("auth") as string;
  const program = programSetting(auth);

  const [date, setDate] = useState<Dayjs | null>(dayjs());

  const { startDate } = records[auth];

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

  return (
    <Container disableGutters={true} maxWidth={"sm"}>
      <DateInput value={date} setValue={setDate} label={"날짜"} />
      {currentDays === "first" && (
        <FirstProgram program={program[currentWeek][currentDays]} />
      )}
      {currentDays === "second" && (
        <SecondProgram program={program[currentWeek][currentDays]} />
      )}
      {currentDays === "third" && (
        <ThirdProgram program={program[currentWeek][currentDays]} />
      )}
    </Container>
  );
};

export default Page;
