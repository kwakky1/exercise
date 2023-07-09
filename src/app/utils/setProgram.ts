import record from "../../scripts/record";

const { weightDifference, smallestWeight } = record;
export function firstSet(firstSquatMain: number) {
  return (
    Math.round(
      (firstSquatMain * (1 - weightDifference * 4)) / (2 * smallestWeight)
    ) *
    2 *
    smallestWeight
  );
}

export function secondSet(firstSquatMain: number) {
  return (
    Math.round(
      (firstSquatMain * (1 - weightDifference * 3)) / (2 * smallestWeight)
    ) *
    2 *
    smallestWeight
  );
}

export function thirdSet(firstSquatMain: number) {
  return (
    Math.round(
      (firstSquatMain * (1 - weightDifference * 2)) / (2 * smallestWeight)
    ) *
    2 *
    smallestWeight
  );
}

export function fourthSet(firstSquatMain: number) {
  return (
    Math.round(
      (firstSquatMain * (1 - weightDifference)) / (2 * smallestWeight)
    ) *
    2 *
    smallestWeight
  );
}

export function repeatSet(firstSquatMain: number) {
  return (
    Math.round(
      (firstSquatMain * (1 - weightDifference * 3)) / (2 * smallestWeight)
    ) *
    2 *
    smallestWeight
  );
}
