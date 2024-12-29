type Results = {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
};

export type SearchAddressResponse = {
  message: string | null;
  results: Results[] | null;
  status: number;
};
