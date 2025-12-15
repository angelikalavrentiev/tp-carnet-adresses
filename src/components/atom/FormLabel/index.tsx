import type { ReactNode } from "react";

interface FormLabelProps {
  content: ReactNode;
  inputId: string;
}

const FormLabel = ({ content, inputId }: FormLabelProps) => {
  return (
    <label htmlFor={inputId} className="p-6 flex items-center justify-center  hover:border-grey-800">
      {content}
    </label>
  );
};

export default FormLabel;
