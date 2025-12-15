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
      required
      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  );

};

export default FormInputName;
