import { FC } from "react";
import { PresentationalProps } from "./types";
import { TableRow } from "./components/TableRow";
import { TableHeaderCell } from "./components/TableHeaderCell";
import { FieldRequiredLabel } from "./components/FieldRequiredLabel";
import { PostalCodeInput } from "./components/PostalCodeInputs";
import { SelectPrefectures } from "./components/SelectPrefectures";
import { Input } from "./components/Input";
import { ErrorMessage } from "./components/ErrorMessage";

/**
 * @remarks
 * presentational component
 */
export const FormTemplate: FC<PresentationalProps> = (props) => {
  const {
    isLoading,
    municipalitiesName,
    prefectureCode,
    hasApiError,
    hasValidationError,
    handleChangePostalCode,
    postalCodeReferences,
  } = props;
  return (
    <form name="address">
      <table>
        <tbody>
          <TableRow>
            <TableHeaderCell>
              <span>郵便番号</span>
              <FieldRequiredLabel />
            </TableHeaderCell>
            <td>
              <PostalCodeInput
                postalCodeReferences={postalCodeReferences}
                handleChange={handleChangePostalCode}
              />
            </td>
          </TableRow>
          <TableRow>
            <TableHeaderCell>
              <span>都道府県名</span>
              <FieldRequiredLabel />
            </TableHeaderCell>
            <td>
              <SelectPrefectures
                isLoading={isLoading}
                selectedPrefectureCode={prefectureCode}
              />
            </td>
          </TableRow>
          <TableRow>
            <TableHeaderCell>
              <span>市区町村名</span>
              <FieldRequiredLabel />
            </TableHeaderCell>
            <td>
              {isLoading ? (
                "Loading..."
              ) : (
                <Input
                  name="municipalities"
                  defaultValue={municipalitiesName}
                />
              )}
            </td>
          </TableRow>
        </tbody>
      </table>
      {hasValidationError && (
        <ErrorMessage>郵便番号を半角数字で入力してください</ErrorMessage>
      )}
      {hasApiError && <ErrorMessage>住所情報の取得に失敗しました</ErrorMessage>}
    </form>
  );
};
