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
      className="formInputEmail"
    />
  );
};

export default FormInputEmail;
