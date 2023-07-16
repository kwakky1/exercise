"use client";

import DeadLift from "@/components/exercise/DeadLift";

interface ProgramProps {
  program: SecondSetting;
}

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import OverheadPress from "@/components/exercise/OverheadPress";
import BehindNeckPress from "@/components/exercise/BehindNeckPress";
import FrontSquat from "@/components/exercise/FrontSquat";

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
          <BehindNeckPress />
          <FrontSquat frontSquat={frontSquat} />
        </form>
      </FormProvider>
    </>
  );
};

export default SecondProgram;
