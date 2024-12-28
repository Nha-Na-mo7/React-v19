import { CSSProperties, ComponentPropsWithoutRef, FC } from "react";

const thStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "150px",
};

export const TableHeaderCell: FC<ComponentPropsWithoutRef<"th">> = (props) => (
  <th {...props} style={thStyle}>
    {props.children}
  </th>
);
