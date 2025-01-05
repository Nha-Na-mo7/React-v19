import { ChangeEventHandler, useRef, useState, useTransition } from "react";
import { searchAddress } from "../../modules/searchAddress";
import { PresentationalProps } from "../../types";
import {
  firstPostalCodeSchema,
  lastPostalCodeSchema,
} from "../../../../schemas/postalCode";

type UseSearchAddress = () => PresentationalProps;

export const useSearchAddress: UseSearchAddress = () => {
  const [isLoading, startTransition] = useTransition();

  const [hasApiError, setHasApiError] = useState(false);
  const [hasValidationError, setHasValidationError] = useState(false);
  const [prefectureCode, setPrefectureCode] = useState("");
  const [municipalitiesName, setMunicipalitiesName] = useState("");

  const firstReference = useRef<HTMLInputElement>(null);
  const lastReference = useRef<HTMLInputElement>(null);

  const handleChangePostalCode: ChangeEventHandler<
    HTMLInputElement
  > = async () => {
    setHasValidationError(false);
    setHasApiError(false);

    const firstValidationResult = firstPostalCodeSchema.safeParse(
      firstReference.current?.value
    );
    const lastValidationResult = lastPostalCodeSchema.safeParse(
      lastReference.current?.value
    );
    const isValid =
      firstValidationResult.success && lastValidationResult.success;
    if (!isValid) {
      setHasValidationError(true);
      return;
    }

    const { data: firstCode } = firstValidationResult;
    const { data: lastCode } = lastValidationResult;

    await searchAddress(`${firstCode}${lastCode}`)
      .then((result) => {
        if (result.isSuccess) {
          setPrefectureCode(result.data.prefectureCode);
          setMunicipalitiesName(result.data.municipalitiesName);
          return;
        }
        setHasApiError(true);
      })
      .catch(() => setHasApiError(true));
  };

  return {
    handleChangePostalCode,
    isLoading,
    hasApiError,
    hasValidationError,
    municipalitiesName,
    prefectureCode,
    postalCodeReferences: {
      firstReference,
      lastReference,
    },
  };
};
