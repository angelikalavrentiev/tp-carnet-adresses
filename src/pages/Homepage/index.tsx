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
    const [contacts, dispatch] = useReducer(contactReducer, loadContacts());

    const [editingContact, setEditingContact] = useState<Contact | null>(null);

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
        <>
        <Header title="Bienvenue sur le carnet d'adresse" />

        <main className="flex-1">
            <Form handleSubmit={editingContact ? handleUpdateContact : handleAddContact}
            editingContact={editingContact}  
            onCancel={handleCancelEdit}>
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
                    <FormInputTel inputName="tel" inputId="tel"/>
                </FormGroup>
                <FormGroup>
                    <FormLabel content="Date de naissance" inputId="birthday" />
                    <FormInputBirth inputName="birthday" inputId="birthday"/>
                </FormGroup>
            </Form>
           
            {contacts.length > 0 && (
                <section className="mt-12 px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                      Contacts
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-800">
                                    <th className="">Nom</th>
                                    <th className="">Prénom</th>
                                    <th className="">Email</th>
                                    <th className="">Téléphone</th>
                                    <th className="">Date de naissance</th>
                                    <th className="">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((c) => {
                                    const today = new Date();
                                    const birthDate = new Date(c.birthday);
                                    const isBirthday =
                                        today.getDate() === birthDate.getDate() &&
                                        today.getMonth() === birthDate.getMonth();

                                    let age = today.getFullYear() - birthDate.getFullYear();
                                    const monthDiff = today.getMonth() - birthDate.getMonth();
                                    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                                        age--;
                                    }

                                    return (
                                        <tr key={c.id} className={`${isBirthday ? "bg-purple-500/10 border-l-4 border-purple-400" : "bg-white/5"} hover:bg-white/10 transition-all duration-200`}>
                                            <td className="py-4 px-6 border-b border-white/5 text-white font-medium">{c.name}</td>
                                            <td className="py-4 px-6 border-b border-white/5 text-gray-200">{c.surname}</td>
                                            <td className="py-4 px-6 border-b border-white/5 text-gray-200">{c.email}</td>
                                            <td className="py-4 px-6 border-b border-white/5 text-gray-200">{c.tel}</td>
                                            <td className="py-4 px-6 border-b border-white/5 text-gray-200">{isBirthday ? `${c.birthday} (${age} ans)` : c.birthday}</td>
                                            <td className="py-4 px-6 border-b border-white/5">
                                                <button
                                                    className="mr-3 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 active:scale-95 transition-all duration-200 shadow-lg shadow-blue-500/30"
                                                    onClick={() => handleEditContact(c)}
                                                >
                                                    Modifier
                                                </button>
                                                <button 
                                                    className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 active:scale-95 transition-all duration-200 shadow-lg shadow-red-500/30" 
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
        </>
    );
}

export default Homepage;