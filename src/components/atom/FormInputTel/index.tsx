interface FormInputTelProps {
  inputId: string;
  inputName: string;
}

const FormInputTel = ({ inputId, inputName }: FormInputTelProps) => {
  return (
  <input
    type="tel"
    id={inputId}
    name={inputName}
    inputMode="numeric"
    pattern="[0-9]{10}"
    maxLength={10}
    required
    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  />
);

};

export default FormInputTel;
