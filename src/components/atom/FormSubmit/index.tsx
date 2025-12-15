import type { ReactNode } from "react";

interface FormSubmitProps {
  content: string | ReactNode;
}

const FormSubmit = ({ content }: FormSubmitProps) => {
  return (
    <button type="submit" className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg font-medium">
      {content}
    </button>
  );
}

export default FormSubmit;
