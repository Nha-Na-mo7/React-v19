import { CSSProperties, ComponentPropsWithoutRef, FC } from "react";

const trStyle: CSSProperties = {
  display: "flex",
  gap: "20px",
  marginTop: "15px",
};

export const TableRow: FC<ComponentPropsWithoutRef<"tr">> = (props) => (
  <tr {...props} style={trStyle}>
    {props.children}
  </tr>
);
