import type { Contact } from "../../../store/contact";

interface FormInputNameProps {
  inputId: string;
  inputName: keyof Contact;
}

const FormInputName = ({ inputId, inputName }: FormInputNameProps) => {
  return (
    <input
      type="text"
      id={inputId}
      name={inputName}
      required
      placeholder="Entrez le nom"
      className="
        w-full
        px-4 py-2
        rounded-md
        border border-gray-300
        text-sm text-gray-900
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        transition-all duration-200
        hover:border-gray-400
      "
    />
  );
};

export default FormInputName;
