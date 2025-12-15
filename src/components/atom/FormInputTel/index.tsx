interface FormInputTelProps {
  inputId: string;
  inputName: string;
}

const FormInputTel = ({ inputId, inputName }: FormInputTelProps) => {
  return (
    <input
      type="tel"
      id={inputId}
      name={inputName}
      inputMode="numeric"
      pattern="[0-9]{10}"
      maxLength={10}
      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
      placeholder="Entrez le téléphone"
    />
  );
};

export default FormInputTel;
