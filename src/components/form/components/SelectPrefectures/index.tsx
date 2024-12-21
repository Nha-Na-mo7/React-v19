import { FC } from "react";
import { Prefectures } from "../../../../const/Prefectures";

type Props = {
  selectedPrefectureCode: `${number}`;
};

export const SelectPrefectures: FC<Props> = ({ selectedPrefectureCode }) => {
  return (
    <select name="prefecture" defaultValue={selectedPrefectureCode}>
      <option hidden>都道府県を選択してください</option>
      {Prefectures.map((prefecture) => {
        const { prefectureCode, prefectureName } = prefecture;
        return (
          <option key={prefectureName} value={prefectureCode}>
            {prefectureName}
          </option>
        );
      })}
    </select>
  );
};
