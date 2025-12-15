import type { ReactNode } from "react";

interface FormSubmitProps {
  content: string | ReactNode;
}

const FormSubmit = ({ content }: FormSubmitProps) => {
  return (
    <button
      type="submit"
      className="
        px-6 py-2
        bg-blue-600
        text-white
        rounded-md
        text-sm font-semibold
        hover:bg-blue-700
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition-all duration-200
        shadow
        hover:shadow-md
        transform hover:scale-105
      "
    >
      {content}
    </button>
  );
};

export default FormSubmit;
