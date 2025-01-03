import { ChangeEventHandler, useRef, useState } from "react";
import { searchAddress } from "../../modules/searchAddress";

type PostalCode = {
  firstCode: string;
  lastCode: string;
};

export const useSearchAddress = () => {
  const [postalCode, setPostalCode] = useState<PostalCode>({
    firstCode: "",
    lastCode: "",
  });

  const [hasApiError, setHasApiError] = useState(false);
  const [hasValidationError, setHasValidationError] = useState(false);
  const [prefectureId, setPrefectureId] = useState("");
  const [municipalitiesName, setMunicipalitiesName] = useState("");
  const firstHalfReference = useRef<HTMLInputElement>(null);
  const latterHalfReference = useRef<HTMLInputElement>(null);

  const handleSearchAddress = async (postalCode: string) => {
    try {
      const data = await searchAddress(postalCode);
      const { municipalitiesName, prefectureCode, prefectureName } = data;

      setMunicipalitiesName(municipalitiesName);
      setPrefectureCode(prefectureCode);
      setPrefectureName(prefectureName);
      setIsApiError(false);
    } catch (error) {
      setIsApiError(true);
      setErrorMessage(`${error}`);
    }
  };

  const validatePostalCode: (postalCode: PostalCode) => boolean = (
    postalCode
  ) => {
    const { firstCode, lastCode } = postalCode;
    if (firstCode.length !== 3 || lastCode.length !== 4) {
      return false;
    }
    return true;
  };

  const onChangeSearchAddress: ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    const { name, value } = event.target;
    const newPostalCode = {
      ...postalCode,
      [name]: value,
    };

    setPostalCode(newPostalCode);
    if (validatePostalCode(newPostalCode)) {
      await handleSearchAddress(
        `${newPostalCode.firstCode}${newPostalCode.lastCode}`
      );
    }
  };

  return {
    isApiError,
    errorMessage,
    MunicipalitiesName,
    PrefectureCode,
    PrefectureName,
    onChangeSearchAddress,
  };
};
