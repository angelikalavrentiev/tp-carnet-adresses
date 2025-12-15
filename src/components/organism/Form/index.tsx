import { useEffect, useRef } from "react";
import FormSubmit from "../../atom/FormSubmit";
import type { FormEvent, ReactNode } from "react";
import type { Contact } from "../../../store/contact";

interface HomepageFormProps {
  handleSubmit: (contact: Contact) => void;
  editingContact?: Contact | null;
  onCancel?: () => void;
  children: React.ReactNode;
}

const HomepageForm = ({ handleSubmit, editingContact, onCancel, children }: HomepageFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (editingContact && formRef.current) {
      const form = formRef.current;
      (form.elements.namedItem('name') as HTMLInputElement).value = editingContact.name;
      (form.elements.namedItem('surname') as HTMLInputElement).value = editingContact.surname;
      (form.elements.namedItem('email') as HTMLInputElement).value = editingContact.email;
      (form.elements.namedItem('tel') as HTMLInputElement).value = editingContact.tel;
      (form.elements.namedItem('birthday') as HTMLInputElement).value = editingContact.birthday;
    } else if (!editingContact && formRef.current) {
      formRef.current.reset();
    }
  }, [editingContact]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const newContact: Contact = {
      id: editingContact ? editingContact.id : Date.now(),
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      surname: (form.elements.namedItem('surname') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      tel: (form.elements.namedItem('tel') as HTMLInputElement).value,
      birthday: (form.elements.namedItem('birthday') as HTMLInputElement).value,
    };

    handleSubmit(newContact);
    form.reset(); 
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="">
      {children}

      <div className="flex gap-4 mt-6">
        <FormSubmit content={editingContact ? "Mettre à jour" : "Ajouter"} />
        {editingContact && onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className=""
          >
            Annuler
          </button>
        )}
      </div>
    </form>
  );
};

export default HomepageForm;