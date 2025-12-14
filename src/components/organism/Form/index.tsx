import FormSubmit from "../../atom/FormSubmit";
import type { FormEvent, ReactNode } from "react";
import type { Contact } from "../../store/contact";

interface HomepageFormProps {
  handleSubmit: (contact: Contact) => void;
  children: ReactNode;
}

const HomepageForm = ({ handleSubmit, children }: HomepageFormProps) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const newContact: Contact = {
      id: Date.now(), 
      name: form.name.value,
      surname: form.surname.value,
      email: form.email.value,
      tel: form.tel.value,
      birth: form.birthday.value,
    };

    handleSubmit(newContact);

    form.reset(); 
  };

  return (
    <form onSubmit={onSubmit} className="homepageForm">
      {children}

      <FormSubmit content="Ajouter" />
    </form>
  );
};

export default HomepageForm;
