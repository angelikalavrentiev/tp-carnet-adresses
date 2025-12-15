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
      className="p-2 mx-auto block hover:border-grey-800"
      placeholder="Entrez le nom"
    />
  );
};

export default FormInputName;
