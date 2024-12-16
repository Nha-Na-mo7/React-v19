import { FC } from "react";
import { Prefectures } from "../../const/Prefectures";

export const Form: FC = (props) => {
  return (
    <form name="address">
      <table>
        <tbody>
          <tr>
            <th>
              <p style={{ color: "red" }} className="errorMessage">
                色々失敗しました。
              </p>
              <span>郵便番号</span>
              <span className="fieldRequiredLabel">必須</span>
            </th>
            <td>
              <div>
                <span>〒</span>
                <div>
                  <input type="text" />
                  -
                  <input type="text" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <span>都道府県名</span>
              <span className="fieldRequiredLabel">必須</span>
            </th>
            <td>
              <select name="prefecture">
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
            </td>
          </tr>
          <tr>
            <th>
              <span>市区町村名</span>
              <span className="fieldRequiredLabel">必須</span>
            </th>
            <td>
              <input type="text" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
