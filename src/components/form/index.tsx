import { FC } from "react";
import { useSearchAddress } from "./hooks/useSearchAddress";
import { FormTemplate } from "./template";

/**
 * @remarks
 * container component
 */
export const Form: FC = () => {
  const dependencies = useSearchAddress();

  return <FormTemplate {...dependencies} />;
};
