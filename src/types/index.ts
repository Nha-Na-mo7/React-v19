/**
 * 住所情報
 */
export type Address = {
  prefectureCode: string;
  prefectureName: string;
  municipalitiesName: string;
};

/**
 * 都道府県
 */
export type Prefecture = Pick<Address, "prefectureCode" | "prefectureName">;
