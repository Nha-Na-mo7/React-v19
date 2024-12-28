import { CSSProperties, ComponentPropsWithoutRef, FC } from "react";

const pStyle: CSSProperties = {
  color: "red",
};

export const ErrorMessage: FC<ComponentPropsWithoutRef<"p">> = (props) => {
  return <p style={pStyle}>{props.children}</p>;
};
