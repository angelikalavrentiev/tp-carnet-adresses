import type { ReactNode } from "react";

interface FormSubmitProps {
  content: string | ReactNode;
}

const FormSubmit = ({ content }: FormSubmitProps) => {
  return (
    <button type="submit" className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20 backdrop-blur-sm">
      {content}
    </button>
  );
}

export default FormSubmit;
