const SearchAddressUrl = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
type Address = {
  prefCode: string;
  prefectureName: string;
  municipalitiesName: string;
};
type SearchAddress = (postalCode: string) => Promise<Address>;
// TODO try~catch, 複数住所取得時処理
export const searchAddress: SearchAddress = async (postalCode) => {
  const response = await fetch(`${SearchAddressUrl}${postalCode}`).then(
    (data) => data.json()
  );
  const { address1, address2, address3, prefcode } = response.results[0];
  const data: Address = {
    prefCode: prefcode,
    prefectureName: address1,
    municipalitiesName: `${address2}${address3}`,
  };
  return data;
};
