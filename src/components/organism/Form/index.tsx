import FormSubmit from "../../atom/FormSubmit";
import type { FormEvent, ReactNode } from "react";


interface HomepageFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

const HomepageForm = ({ handleSubmit, children }: HomepageFormProps) => {
    return (
        <form onSubmit={handleSubmit} className="homepageForm">
            {children}

            <FormSubmit content="Ajouter" />
        </form>
    );
}
export default HomepageForm;