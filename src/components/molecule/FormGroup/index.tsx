import type { ReactNode } from "react";

interface FormGroupProps {
  children: ReactNode;
}

const FormGroup = ({ children }: FormGroupProps) => {
  return <div className="mb-4">{children}</div>;
}

export default FormGroup;
