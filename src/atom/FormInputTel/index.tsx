const FormInputTel = ({ inputId, inputName }) => {
  return (
    <input
        type="tel"
        id={inputId}
        name={inputName}
        inputMode="numeric"
        pattern="[0-9]{10}"
        maxLength={10}
    />
  );
};

export default FormInputTel;
