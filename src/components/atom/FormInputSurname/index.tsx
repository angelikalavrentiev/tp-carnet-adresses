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
      className="p-2 mx-auto block hover:border-grey-800"
      placeholder="Entrez le prénom"
    />
  );
};

export default FormInputSurname;
