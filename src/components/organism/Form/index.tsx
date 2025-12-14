import { useEffect, useRef } from "react";
import FormSubmit from "../../atom/FormSubmit";
import type { FormEvent, ReactNode } from "react";
import type { Contact } from "../../../store/contact";

interface HomepageFormProps {
  handleSubmit: (contact: Contact) => void;
  editingContact?: Contact | null; 
  onCancel?: () => void; 
  children: ReactNode;
}

const HomepageForm = ({ handleSubmit, editingContact, onCancel, children }: HomepageFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (editingContact && formRef.current) {
      const form = formRef.current;
      form.name.value = editingContact.name;
      form.surname.value = editingContact.surname;
      form.email.value = editingContact.email;
      form.tel.value = editingContact.tel;
      form.birthday.value = editingContact.birthday;
    } else if (!editingContact && formRef.current) {
      formRef.current.reset();
    }
  }, [editingContact]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const newContact: Contact = {
      id: editingContact ? editingContact.id : Date.now(),
      name: form.name.value,
      surname: form.surname.value,
      email: form.email.value,
      tel: form.tel.value,
      birthday: form.birthday.value,
    };

    handleSubmit(newContact);
    form.reset(); 
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="homepageForm">
      {children}

      <div className="formButtons">
        <FormSubmit content={editingContact ? "Mettre à jour" : "Ajouter"} />
        {editingContact && onCancel && (
          <button 
            type="button" 
            onClick={onCancel}
            className="formCancelButton"
          >
            Annuler
          </button>
        )}
      </div>
    </form>
  );
};

export default HomepageForm;