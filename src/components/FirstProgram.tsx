"use client";

import Squat from "@/components/exercise/Squat";

interface ProgramProps {
  program: FirstSetting;
}

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import BenchPress from "@/components/exercise/BenchPress";
import PendlayRow from "@/components/exercise/PendlayRow";
import Dips from "@/components/exercise/Dips";
import PullUp from "@/components/exercise/PullUp";

const SecondProgram = ({ program }: ProgramProps) => {
  const { squat, pendlayRow, dips, pullUp, benchPress } = program;

  const methods = useForm<SecondSetting>({
    defaultValues: {},
  });

  return (
    <>
      <FormProvider {...methods}>
        <form>
          <Squat squat={squat} />
          <BenchPress benchPress={benchPress} />
          <Dips />
          <PendlayRow pendlayRow={pendlayRow} />
          <PullUp />
        </form>
      </FormProvider>
    </>
  );
};

export default SecondProgram;
