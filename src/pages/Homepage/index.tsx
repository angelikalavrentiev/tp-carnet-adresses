import { useReducer, useEffect, useState } from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Form from "../../components/organism/Form";
import FormGroup from "../../components/molecule/FormGroup";
import FormLabel from "../../components/atom/FormLabel";
import FormInputEmail from "../../components/atom/FormInputEmail";
import FormInputName from "../../components/atom/FormInputName";
import FormInputSurname from "../../components/atom/FormInputSurname";
import FormInputTel from "../../components/atom/FormInputTel";
import FormInputBirth from "../../components/atom/FormInputBirth";
import { contactReducer } from "../../store/contactReducer";
import type { Contact } from "../../store/contact";
import { loadContacts, saveContacts } from "../../store/localStorage";

const Homepage = () => {
    const [contacts, dispatch] = useReducer(contactReducer, []);
    const [editingContact, setEditingContact] = useState<Contact | null>(null);

    useEffect(() => {
        dispatch({ type: "SET_CONTACTS", payload: loadContacts() });
    }, []);

    useEffect(() => {
        saveContacts(contacts);
    }, [contacts]);

    const handleAddContact = (contact: Contact) => {
        dispatch({ type: "ADD_CONTACT", payload: contact });
    };

    const handleEditContact = (contact: Contact) => {
        setEditingContact(contact);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleUpdateContact = (contact: Contact) => {
        dispatch({ type: "UPDATE_CONTACT", payload: contact });
        setEditingContact(null);
    };

    const handleCancelEdit = () => {
        setEditingContact(null);
    };

    const handleRemoveContact = (id: number) => {
        dispatch({ type: "REMOVE_CONTACT", payload: id });
    };


    return (
    <div  className="min-h-screen flex flex-col bg-gray-50">
      <Header title="Bienvenue sur le carnet d'adresse" />

      <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-8">
        <Form
          handleSubmit={editingContact ? handleUpdateContact : handleAddContact}
          editingContact={editingContact}
          onCancel={handleCancelEdit}
        >
          <FormGroup>
            <FormLabel content="Nom" inputId="name" />
            <FormInputName inputName="name" inputId="name" />
          </FormGroup>

          <FormGroup>
            <FormLabel content="Prénom" inputId="surname" />
            <FormInputSurname inputName="surname" inputId="surname" />
          </FormGroup>

          <FormGroup>
            <FormLabel content="Email" inputId="email" />
            <FormInputEmail inputName="email" inputId="email" />
          </FormGroup>

          <FormGroup>
            <FormLabel content="Téléphone" inputId="tel" />
            <FormInputTel inputName="tel" inputId="tel" />
          </FormGroup>

          <FormGroup>
            <FormLabel content="Date de naissance" inputId="birthday" />
            <FormInputBirth inputName="birthday" inputId="birthday" />
          </FormGroup>
        </Form>

        {contacts.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Contacts</h2>

            <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
              <table className="min-w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Nom</th>
                    <th className="px-4 py-2 text-left">Prénom</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Téléphone</th>
                    <th className="px-4 py-2 text-left">Date de naissance</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {contacts.map((c) => {
                    const today = new Date();
                    const birthDate = new Date(c.birthday);
                    const isBirthday =
                      today.getDate() === birthDate.getDate() &&
                      today.getMonth() === birthDate.getMonth();

                    return (
                      <tr
                        key={c.id}
                        className={isBirthday ? "bg-yellow-100" : "bg-white"}
                      >
                        <td className="px-4 py-2">{c.name}</td>
                        <td className="px-4 py-2">{c.surname}</td>
                        <td className="px-4 py-2">{c.email}</td>
                        <td className="px-4 py-2">{c.tel}</td>
                        <td className="px-4 py-2">{c.birthday}</td>
                        <td className="px-4 py-2">
                          <button
                            className="text-blue-600 hover:underline mr-3"
                            onClick={() => handleEditContact(c)}
                          >
                            Modifier
                          </button>
                          <button
                            className="text-red-600 hover:underline"
                            onClick={() => handleRemoveContact(c.id)}
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>

      <Footer content="© 2026 Carnet d'Adresses" />
    </div>
  );
};

export default Homepage;