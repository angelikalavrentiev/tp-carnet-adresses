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
      className="
        w-full
        px-4 py-2
        rounded-md
        border border-gray-300
        text-sm text-gray-900
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        transition-all duration-200
        hover:border-gray-400
      "
    />
  );
};

export default FormInputBirth;
