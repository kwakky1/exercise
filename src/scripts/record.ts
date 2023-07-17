import dayjs from "dayjs";

const records = {
  andy: {
    squat: 70,
    benchPress: 65,
    deadLift: 85,
    pendlayRow: 45,
    overheadPress: 40,
    barWeight: 20,
    smallestWeight: 2.5,
    sameWeek: 2,
    weightDifference: 0.125,
    startDate: dayjs("2023-06-26").toDate(),
  },
  jacob: {
    squat: 110,
    benchPress: 75,
    deadLift: 120,
    pendlayRow: 50,
    overheadPress: 45,
    barWeight: 20,
    smallestWeight: 2.5,
    sameWeek: 2,
    weightDifference: 0.125,
    startDate: dayjs("2023-07-17").toDate(),
  },
  ted: {
    squat: 115,
    benchPress: 75,
    deadLift: 135,
    pendlayRow: 70,
    overheadPress: 45,
    barWeight: 20,
    smallestWeight: 2.5,
    sameWeek: 6,
    weightDifference: 0.125,
    startDate: dayjs("2023-06-19").toDate(),
  },
} as RecordsType;

export default records;
