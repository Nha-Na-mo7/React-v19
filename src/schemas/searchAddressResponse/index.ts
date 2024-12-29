import { SearchAddressResponse } from "../../components/form/modules/searchAddress/types";
import { ZodType, z } from "zod";

const resultsSchema = z.array(
  z.object({
    address1: z.string(),
    address2: z.string(),
    address3: z.string(),
    kana1: z.string(),
    kana2: z.string(),
    kana3: z.string(),
    prefcode: z.string(),
    zipcode: z.string(),
  })
) satisfies ZodType<SearchAddressResponse["results"]>;

export const searchAddressResponseSchema = z.object({
  message: z.string().nullable(),
  results: resultsSchema.nullable(),
  status: z.number(),
}) satisfies ZodType<SearchAddressResponse>;
