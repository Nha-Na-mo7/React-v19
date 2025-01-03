import { searchAddressResponseSchema } from "../../../../schemas/searchAddressResponse";
import { Address } from "../../../../types";
import { Result } from "../../types/Result";

const SearchAddressUrl = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";

type SearchAddress = (postalCode: string) => Promise<Result<null, Address>>;

// TODO 複数住所取得時処理を追加する
export const searchAddress: SearchAddress = async (postalCode) => {
  try {
    const response = await fetch(`${SearchAddressUrl}${postalCode}`).then(
      (data) => data.json()
    );
    const validResponse = searchAddressResponseSchema.parse(response);
    if (validResponse.status !== 200 || !validResponse.results?.length)
      throw new Error("Insufficient response");

    // 現状は一件目のみ取得している
    const { address1, address2, address3, prefcode } = validResponse.results[0];

    const data: Address = {
      prefectureCode: prefcode,
      prefectureName: address1,
      municipalitiesName: `${address2}${address3}`,
    };

    return {
      isSuccess: true,
      data,
    };
  } catch {
    return {
      isSuccess: false,
      error: null,
    };
  }
};
