interface FormInputEmailProps {
  inputId: string;
  inputName: string;
}

const FormInputEmail = ({ inputId, inputName }: FormInputEmailProps) => {
  return (
    <input
      type="email"
      id={inputId}
      name={inputName}
      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
      placeholder="Entrez l'email"
    />
  );
};

export default FormInputEmail;
