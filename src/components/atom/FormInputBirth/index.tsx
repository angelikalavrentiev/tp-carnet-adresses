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
    required
    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  />
);

};

export default FormInputBirth;
