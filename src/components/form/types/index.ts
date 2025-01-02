import { ChangeEventHandler, RefObject } from "react";
import { Address } from "../../../types";

/**
 * @remarks
 * presentational componentがcontainerから受け取るprops
 */
export type PresentationalProps = Pick<
  Address,
  "municipalitiesName" | "prefectureCode"
> & {
  hasApiError: boolean;
  hasValidationError: boolean;
  handleChangePostalCode: ChangeEventHandler<HTMLInputElement>;
  postalCodeReferences: {
    firstReference: RefObject<HTMLInputElement | null>;
    lastReference: RefObject<HTMLInputElement | null>;
  };
};
