import type { ReactNode } from "react";

interface FormGroupProps {
  children: ReactNode;
  className?: string;
}

const FormGroup = ({ children, className = "" }: FormGroupProps) => {
  return <div className="formGroup">{children}</div>;
}

export default FormGroup;
