import type { ReactNode } from "react";

interface FormSubmitProps {
  content: string | ReactNode;
}

const FormSubmit = ({ content }: FormSubmitProps) => {
  return (
    <button type="submit" className="formSubmit">
      {content}
    </button>
  );
}

export default FormSubmit;
