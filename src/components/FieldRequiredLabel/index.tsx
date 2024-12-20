import { FC } from "react";

export const FieldRequiredLabel: FC = () => {
  return (
    <span
      style={{
        backgroundColor: "#c00000",
        color: "#ddd",
        paddingInline: "5px",
      }}
    >
      必須
    </span>
  );
};
