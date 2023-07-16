interface RecordsType {
  [key: string]: RecordType;
}

interface RecordType {
  squat: number;
  benchPress: number;
  deadLift: number;
  pendlayRow: number;
  overheadPress: number;
  barWeight: number;
  smallestWeight: number;
  sameWeek: number;
  weightDifference: number;
  startDate: Date;
}

interface FirstSetting {
  squat: {
    1: { weight: number; count: number };
    2: { weight: number; count: number };
    3: { weight: number; count: number };
    4: { weight: number; count: number };
    5: { weight: number; count: number };
    repeat: { weight: number; count: string };
  };
  benchPress: {
    1: { weight: number; count: number };
    2: { weight: number; count: number };
    3: { weight: number; count: number };
    4: { weight: number; count: number };
    5: { weight: number; count: number };
  };
  dips: {};
  pendlayRow: {
    1: { weight: number; count: number };
    2: { weight: number; count: number };
    3: { weight: number; count: number };
    4: { weight: number; count: number };
    5: { weight: number; count: number };
  };
  pullUp: {};
}

interface SecondSetting {
  deadLift: {
    1: { weight: number; count: number };
    2: { weight: number; count: number };
    3: { weight: number; count: number };
    4: { weight: number; count: number };
  };
  overheadPress: {
    1: { weight: number; count: number };
    2: { weight: number; count: number };
    3: { weight: number; count: number };
    4: { weight: number; count: number };
    repeat: { weight: number; count: string };
  };
  behindNeckPress: {};
  frontSquat: {
    1: { weight: number; count: number };
    2: { weight: number; count: number };
    3: { weight: number; count: number };
    repeat: { weight: number; count: string };
  };
}

interface ThirdSetting {
  squat: {
    1: { weight: number; count: number };
    2: { weight: number; count: number };
    3: { weight: number; count: number };
    4: { weight: number; count: number };
    5: { weight: number; count: number };
    repeat: { weight: number; count: string };
  };
  benchPress: {
    1: { weight: number; count: number };
    2: { weight: number; count: number };
    3: { weight: number; count: number };
    4: { weight: number; count: number };
    5: { weight: number; count: number };
  };
  dips: {};
  pendlayRow: {
    1: { weight: number; count: number };
    2: { weight: number; count: number };
    3: { weight: number; count: number };
    4: { weight: number; count: number };
    5: { weight: number; count: number };
    repeat: { weight: number };
  };
  chinUp: {};
}

interface ProgramSettingProps {
  first: FirstSetting;
  second: SecondSetting;
  third: ThirdSetting;
}
