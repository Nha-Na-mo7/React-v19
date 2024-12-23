import { FC } from "react";
import { SelectPrefectures } from "./components/SelectPrefectures";
import { ErrorMessage } from "./components/ErrorMessage";
import { PostalCodeInputs } from "./components/PostalCodeInputs";

// dummy const
const selectedPrefectureCode = "0";
const isError = false;
const errorMessage = "色々エラーになりました";

export const Form: FC = (props) => {
  return (
    <form name="address" style={{}}>
      <table>
        <tbody>
          {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <tr>
            <th>郵便番号</th>
            <td>
              <PostalCodeInputs onChange={() => {}} />
            </td>
          </tr>
          <tr>
            <th>都道府県名</th>
            <td>
              <SelectPrefectures
                selectedPrefectureCode={selectedPrefectureCode}
              />
            </td>
          </tr>
          <tr>
            <th>市区町村名</th>
            <td>
              <input style={{ width: "100%" }} name="citiesInput" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
