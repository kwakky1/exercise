"use client";

import DeadLift from "@/components/exercise/DeadLift";

interface ProgramProps {
  program: SecondSetting;
}

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import OverheadPress from "@/components/exercise/OverheadPress";

const SecondProgram = ({ program }: ProgramProps) => {
  const { deadLift, overheadPress, behindNeckPress, frontSquat } = program;

  const methods = useForm<SecondSetting>({
    defaultValues: {},
  });

  return (
    <>
      <FormProvider {...methods}>
        <form>
          <DeadLift deadLift={deadLift} />
          <OverheadPress overheadPress={overheadPress} />
        </form>
      </FormProvider>
    </>
  );
};

export default SecondProgram;
