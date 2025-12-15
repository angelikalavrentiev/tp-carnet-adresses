import type { ReactNode } from "react";

interface FormLabelProps {
  content: ReactNode;
  inputId: string;
}

const FormLabel = ({ content, inputId }) => {
  return (
  <label
    htmlFor={inputId}
    className="text-sm font-medium text-gray-700"
  >
    {content}
  </label>
);

};
export default FormLabel;