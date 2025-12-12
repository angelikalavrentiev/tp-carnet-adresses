const FormLabel = ({ content, inputId }) => {
  return (
    <label htmlFor={inputId} className="">
      {content}
    </label>
  );
};

export default FormLabel;
