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
      className="p-2 mx-auto block hover:border-grey-800"
      placeholder="Entrez le téléphone"
    />
  );
};

export default FormInputTel;
