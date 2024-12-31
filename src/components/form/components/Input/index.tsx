import { CSSProperties, ComponentPropsWithRef, FC } from "react";

const inputStyle: CSSProperties = {
  border: "solid 1px black",
  borderRadius: "3px",
  padding: "2px 4px",
};

/** React19: forwardRefを挟まず、refを取得可能 */
export const Input: FC<ComponentPropsWithRef<"input">> = (props) => {
  return <input {...props} ref={props.ref} style={inputStyle} />;
};
