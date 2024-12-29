import { z } from "zod";

const halfWidthDigitRegexp = /^\d+$/;

export const firstPostalCodeSchema = z
  .string()
  .regex(halfWidthDigitRegexp)
  .length(3);
export const lastPostalCodeSchema = z
  .string()
  .regex(halfWidthDigitRegexp)
  .length(4);
