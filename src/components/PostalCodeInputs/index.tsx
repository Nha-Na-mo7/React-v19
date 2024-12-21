import { ChangeEventHandler, FC } from "react";

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const PostalCodeInputs: FC<Props> = ({ onChange }) => {
  return (
    <div>
      <span>〒</span>
      <input name="firstPostalCode" onChange={onChange} /> -{" "}
      <input name="lastPostalCode" onChange={onChange} />
    </div>
  );
};
