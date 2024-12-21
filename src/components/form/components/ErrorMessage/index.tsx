import { FC } from "react";

type Props = {
  children: string;
};

export const ErrorMessage: FC<Props> = ({ children }) => {
  return <p style={{ color: "red" }}>{children}</p>;
};
