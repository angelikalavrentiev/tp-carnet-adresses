interface FormInputSurnameProps {
  inputId: string;
  inputName: string;
}

const FormInputSurname = ({ inputId, inputName }: FormInputSurnameProps) => {
  return (
    <input
      type="text"
      id={inputId}
      name={inputName}
      className="formInputSurname"
    />
  );
};

export default FormInputSurname;
