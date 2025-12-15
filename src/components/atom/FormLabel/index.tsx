import type { ReactNode } from "react";

interface FormLabelProps {
  content: ReactNode;
  inputId: string;
}

const FormLabel = ({ content, inputId }: FormLabelProps) => {
  return (
    <label
      htmlFor={inputId}
      className="block text-sm font-medium text-white-700 mb-1"
    >
      {content}
    </label>
  );
};

export default FormLabel;
