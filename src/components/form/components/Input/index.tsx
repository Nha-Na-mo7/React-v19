import React, { CSSProperties, ComponentPropsWithRef } from "react";
const inputStyle: CSSProperties = {
  border: "solid 1px black",
  borderRadius: "3px",
  padding: "2px 4px",
};

/* React19でforwardRef関連記述が不要に */
export const Input = React.forwardRef<
  HTMLInputElement,
  ComponentPropsWithRef<"input">
>((props, reference) => (
  <input {...props} ref={reference} style={inputStyle} />
));
