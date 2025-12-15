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
      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 hover:bg-white/15"
      placeholder="Entrez le téléphone"
    />
  );
};

export default FormInputTel;
