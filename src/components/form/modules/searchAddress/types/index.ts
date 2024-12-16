type Results = {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: `${number}`;
  zipcode: `${number}`;
};
type ErrorResponse = {
  message: string;
  results: null;
  status: 400 | 500;
};
type SuccessResponse = {
  message: null;
  results: Results[];
  status: 200;
};
export type SearchAddressResponse = ErrorResponse | SuccessResponse;
