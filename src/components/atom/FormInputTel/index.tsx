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
      className="formInputTel"
    />
  );
};

export default FormInputTel;
