import { FC } from "react";

export const PostalCodeInputs: FC = () => {
  return (
    <div>
      <span>〒</span>
      <input name="firstPostalCode" /> - <input name="lastPostalCode" />
    </div>
  );
};
