import { ChangeEventHandler, useState } from "react";
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
  const [isApiError, setIsApiError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fetchedMunicipalitiesName, setFetchedMunicipalitiesName] =
    useState<string>("");
  const [fetchedPrefectureCode, setFetchedPrefectureCode] =
    useState<`${number}`>("0");
  const [fetchedPrefectureName, setFetchedPrefectureName] =
    useState<string>("");

  const handleSearchAddress = async (postalCode: string) => {
    try {
      const data = await searchAddress(postalCode);
      const { municipalitiesName, prefCode, prefectureName } = data;

      setFetchedMunicipalitiesName(municipalitiesName);
      // TODO 型定義してas typeを避ける
      setFetchedPrefectureCode(prefCode as `${number}`);
      setFetchedPrefectureName(prefectureName);
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
    setErrorMessage("");
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
    fetchedMunicipalitiesName,
    fetchedPrefectureCode,
    fetchedPrefectureName,
    onChangeSearchAddress,
  };
};
