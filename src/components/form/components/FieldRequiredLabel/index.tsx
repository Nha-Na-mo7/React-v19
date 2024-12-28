import { CSSProperties, FC } from "react";

const labelStyle: CSSProperties = {
  backgroundColor: "#c00000",
  color: "#ddd",
  paddingInline: "5px",
  fontSize: "12px",
};

export const FieldRequiredLabel: FC = () => (
  <span style={labelStyle}>必須</span>
);
