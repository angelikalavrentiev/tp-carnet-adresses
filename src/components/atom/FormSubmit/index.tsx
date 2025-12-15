import type { ReactNode } from "react";

interface FormSubmitProps {
  content: string | ReactNode;
}

const FormSubmit = ({ content }: FormSubmitProps) => {
  return (
    <button type="submit" className="p-6 flex items-center justify-center  hover:border-grey-800">
      {content}
    </button>
  );
}

export default FormSubmit;
