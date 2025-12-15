import type { ReactNode } from "react";

interface FormSubmitProps {
  content: string | ReactNode;
}

const FormSubmit = ({ content }: FormSubmitProps) => {
  return (
  <button
    type="submit"
    className="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    {content}
  </button>
);

}

export default FormSubmit;
