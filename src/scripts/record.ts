import dayjs from "dayjs";

const record = {
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
} as RecordType;

export default record;
