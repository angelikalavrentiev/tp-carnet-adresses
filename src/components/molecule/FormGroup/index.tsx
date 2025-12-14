import type { ReactNode } from "react";

interface FormGroupProps {
  children: ReactNode;
}

const FormGroup = ({ children }: FormGroupProps) => {
  return <div className="formGroup">{children}</div>;
}

export default FormGroup;
