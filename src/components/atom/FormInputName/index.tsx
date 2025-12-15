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
      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 hover:bg-white/15"
      placeholder="Entrez le nom"
    />
  );
};

export default FormInputName;
