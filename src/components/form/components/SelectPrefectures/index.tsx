import { FC } from "react";
import { Prefectures } from "../../../../const/Prefectures";
import { Prefecture } from "../../../../types";

type Props = {
  selectedPrefectureCode: string;
};

const getCurrentPrefectureCode = (
  prefectures: Prefecture[],
  selectedId: string
): string => {
  const selected = prefectures.find(
    (prefecture) => prefecture.prefectureCode === selectedId
  )?.prefectureName;
  return selected ?? "";
};

export const SelectPrefectures: FC<Props> = ({ selectedPrefectureCode }) => {
  return (
    <select
      name="prefecture"
      defaultValue={getCurrentPrefectureCode(
        [...Prefectures],
        selectedPrefectureCode
      )}
    >
      <option value={""}>都道府県を選択してください</option>
      {Prefectures.map((prefecture) => {
        const { prefectureCode, prefectureName } = prefecture;
        return (
          <option value={prefectureName} key={prefectureCode}>
            {prefectureName}
          </option>
        );
      })}
    </select>
  );
};
