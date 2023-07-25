import records from "../../scripts/record";
import {
  firstSet,
  fourthSet,
  secondSet,
  thirdSet,
} from "@/app/utils/setProgram";

const programSetting = (user: string): ProgramSettingProps[] => {
  const {
    squat,
    benchPress,
    deadLift,
    pendlayRow,
    overheadPress,
    smallestWeight,
  } = records[user];
  const program = Array.from({ length: 12 });

  return program.map((_, index) => {
    const week = index + 1;

    const firstSquatMain =
      Math.round(
        (squat * Math.pow(1.025, week - 1 === 0 ? 1 : week - 1)) /
          (2 * smallestWeight)
      ) *
      2 *
      smallestWeight;

    const firstBenchMain =
      Math.round(
        (benchPress * Math.pow(1.025, week - 1 === 0 ? 1 : week - 1)) /
          (2 * smallestWeight)
      ) *
      2 *
      smallestWeight;

    const firstPendlayMain =
      Math.round(
        (pendlayRow * Math.pow(1.025, week - 1 === 0 ? 1 : week - 1)) /
          (2 * smallestWeight)
      ) *
      2 *
      smallestWeight;

    const thirdSquatMain =
      Math.round((squat * Math.pow(1.025, week)) / (2 * smallestWeight)) *
      2 *
      smallestWeight;

    const thirdBenchMain =
      Math.round((benchPress * Math.pow(1.025, week)) / (2 * smallestWeight)) *
      2 *
      smallestWeight;

    const thirdPendlayMain =
      Math.round((pendlayRow * Math.pow(1.025, week)) / (2 * smallestWeight)) *
      2 *
      smallestWeight;

    const deadLiftMain =
      Math.round((deadLift * Math.pow(1.025, week)) / (2 * smallestWeight)) *
      2 *
      smallestWeight;

    const overheadPressMain =
      Math.round(
        (overheadPress * Math.pow(1.025, week - 1 === 0 ? 1 : week - 1)) /
          (2 * smallestWeight)
      ) *
      2 *
      smallestWeight;

    return {
      first: {
        squat: {
          1: {
            weight: firstSet(firstSquatMain),
            count: 5,
          },
          2: {
            weight: secondSet(firstSquatMain),
            count: 5,
          },
          3: {
            weight: thirdSet(firstSquatMain),
            count: 5,
          },
          4: {
            weight: fourthSet(firstSquatMain),
            count: 5,
          },
          5: {
            weight: firstSquatMain,
            count: 5,
          },
          repeat: {
            weight: secondSet(firstSquatMain),
            count: "반복",
          },
        },
        benchPress: {
          1: {
            weight: firstSet(firstBenchMain),
            count: 5,
          },
          2: {
            weight: secondSet(firstBenchMain),
            count: 5,
          },
          3: {
            weight: thirdSet(firstBenchMain),
            count: 5,
          },
          4: {
            weight: fourthSet(firstBenchMain),
            count: 5,
          },
          5: {
            weight: firstBenchMain,
            count: 5,
          },
        },
        dips: {},
        pendlayRow: {
          1: {
            weight: firstSet(firstPendlayMain),
            count: 5,
          },
          2: {
            weight: secondSet(firstPendlayMain),
            count: 5,
          },
          3: {
            weight: thirdSet(firstPendlayMain),
            count: 5,
          },
          4: {
            weight: fourthSet(firstPendlayMain),
            count: 5,
          },
          5: {
            weight: firstPendlayMain,
            count: 5,
          },
        },
        pullUp: {},
      },
      second: {
        deadLift: {
          1: {
            weight: secondSet(deadLiftMain),
            count: 5,
          },
          2: {
            weight: thirdSet(deadLiftMain),
            count: 5,
          },
          3: {
            weight: fourthSet(deadLiftMain),
            count: 5,
          },
          4: {
            weight: deadLiftMain,
            count: 3,
          },
        },
        overheadPress: {
          1: {
            weight: secondSet(overheadPressMain),
            count: 5,
          },
          2: {
            weight: thirdSet(overheadPressMain),
            count: 5,
          },
          3: {
            weight: fourthSet(overheadPressMain),
            count: 5,
          },
          4: {
            weight: overheadPressMain,
            count: 3,
          },
          repeat: {
            weight: secondSet(overheadPressMain),
            count: "반복",
          },
        },
        behindNeckPress: {},
        frontSquat: {
          1: {
            weight: firstSet(firstSquatMain),
            count: 5,
          },
          2: {
            weight: secondSet(firstSquatMain),
            count: 5,
          },
          3: {
            weight: thirdSet(firstSquatMain),
            count: 5,
          },
          repeat: {
            weight: secondSet(firstSquatMain),
            count: "반복",
          },
        },
      },
      third: {
        squat: {
          1: {
            weight: firstSet(thirdSquatMain),
            count: 5,
          },
          2: {
            weight: secondSet(thirdSquatMain),
            count: 5,
          },
          3: {
            weight: thirdSet(thirdSquatMain),
            count: 5,
          },
          4: {
            weight: fourthSet(thirdSquatMain),
            count: 5,
          },
          5: {
            weight: thirdSquatMain,
            count: 3,
          },
          repeat: {
            weight: secondSet(thirdSquatMain),
            count: "반복",
          },
        },
        benchPress: {
          1: {
            weight: firstSet(thirdBenchMain),
            count: 5,
          },
          2: {
            weight: secondSet(thirdBenchMain),
            count: 5,
          },
          3: {
            weight: thirdSet(thirdBenchMain),
            count: 5,
          },
          4: {
            weight: fourthSet(thirdBenchMain),
            count: 5,
          },
          5: {
            weight: thirdBenchMain,
            count: 3,
          },
        },
        dips: {},
        pendlayRow: {
          1: {
            weight: firstSet(thirdPendlayMain),
            count: 5,
          },
          2: {
            weight: secondSet(thirdPendlayMain),
            count: 5,
          },
          3: {
            weight: thirdSet(thirdPendlayMain),
            count: 5,
          },
          4: {
            weight: fourthSet(thirdPendlayMain),
            count: 5,
          },
          5: {
            weight: thirdPendlayMain,
            count: 5,
          },
          repeat: {
            weight: secondSet(thirdPendlayMain),
            count: "반복",
          },
        },
        chinUp: {},
      },
    };
  });
};

export default programSetting;
