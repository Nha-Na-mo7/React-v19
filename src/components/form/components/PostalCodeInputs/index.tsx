import { CSSProperties, ChangeEventHandler, FC, RefObject } from "react";
import { Input } from "../Input";

type Props = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  postalCodeReferences: {
    firstReference: RefObject<HTMLInputElement | null>;
    lastReference: RefObject<HTMLInputElement | null>;
  };
};

const containerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: "30%",
};

export const PostalCodeInput: FC<Props> = (props) => {
  const {
    handleChange,
    postalCodeReferences: { firstReference, lastReference },
  } = props;
  return (
    <div style={containerStyle}>
      <span>〒</span>
      <div style={containerStyle}>
        <Input
          name="firstPostalCode"
          ref={firstReference}
          size={3}
          onChange={handleChange}
        />
        -
        <Input
          name="latterPostalCode"
          ref={lastReference}
          size={4}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
