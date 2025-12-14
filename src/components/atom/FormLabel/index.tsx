import type { ReactNode } from "react";

interface FormLabelProps {
  content: ReactNode;
  inputId: string;
}

const FormLabel = ({ content, inputId }: FormLabelProps) => {
  return (
    <label htmlFor={inputId} className="formLabel">
      {content}
    </label>
  );
};

export default FormLabel;
