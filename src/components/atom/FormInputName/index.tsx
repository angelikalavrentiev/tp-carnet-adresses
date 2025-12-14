interface FormInputNameProps {
  inputId: string;
  inputName: string;
}

const FormInputName = ({ inputId, inputName }: FormInputNameProps) => {
  return (
    <input
      type="text"
      id={inputId}
      name={inputName}
      className="formInputName"
    />
  );
};

export default FormInputName;
