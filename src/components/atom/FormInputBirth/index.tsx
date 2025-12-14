interface FormInputBirthProps {
  inputId: string;
  inputName: string;
}

const FormInputBirth = ({ inputId, inputName }: FormInputBirthProps) => {
  return (
    <input
      type="date"
      id={inputId}
      name={inputName}
      className="formInputBirth"
    />
  );
};

export default FormInputBirth;
