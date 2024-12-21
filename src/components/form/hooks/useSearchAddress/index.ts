import { ChangeEventHandler, useState } from "react";
import { searchAddress } from "../../modules/searchAddress";

const DUMMY_ADDRESS = "9800001";

export const useSearchAddress = () => {
  const [isApiError, setIsApiError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fetchedMunicipalitiesName, setFetchedMunicipalitiesName] =
    useState<string>("");
  const [fetchedPrefectureCode, setFetchedPrefectureCode] =
    useState<`${number}`>("0");
  const [fetchedPrefectureName, setFetchedPrefectureName] =
    useState<string>("");

  const handleSearchAddress = async () => {
    try {
      const data = await searchAddress(DUMMY_ADDRESS);
      const { municipalitiesName, prefCode, prefectureName } = data;

      console.log(data);

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

  const onChangeSearchAddress: ChangeEventHandler<HTMLInputElement> = () => {
    handleSearchAddress();
    console.log(fetchedMunicipalitiesName);
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
