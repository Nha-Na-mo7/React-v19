import { ChangeEventHandler, FC } from "react";

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const PostalCodeInputs: FC<Props> = ({ onChange }) => {
  return (
    <div>
      <span>〒</span>
      <input name="firstCode" onChange={onChange} /> -{" "}
      <input name="lastCode" onChange={onChange} />
    </div>
  );
};
