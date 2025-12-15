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
      className="p-2 mx-auto block hover:border-grey-800"
    />
  );
};

export default FormInputBirth;
