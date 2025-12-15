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
      required
      placeholder="Entrez le téléphone"
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

export default FormInputTel;
