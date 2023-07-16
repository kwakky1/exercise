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
    startDate: dayjs("2023-06-26").toDate(),
  },
  ted: {
    squat: 130,
    benchPress: 85,
    deadLift: 150,
    pendlayRow: 80,
    overheadPress: 50,
    barWeight: 20,
    smallestWeight: 2.5,
    sameWeek: 6,
    weightDifference: 0.125,
    startDate: dayjs("2023-07-17").toDate(),
  },
} as RecordsType;

export default records;
