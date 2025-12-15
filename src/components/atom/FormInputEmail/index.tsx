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
      className="p-2 mx-auto block hover:border-grey-800"
      placeholder="Entrez l'email"
    />
  );
};

export default FormInputEmail;
