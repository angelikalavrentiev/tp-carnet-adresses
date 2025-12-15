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
    console.log("Homepage render, contacts length:", contacts.length);

    const [editingContact, setEditingContact] = useState<Contact | null>(null);

    useEffect(() => {
        saveContacts(contacts);
    }, [contacts]);

    const handleAddContact = (contact: Contact) => {
        console.log("Adding contact:", contact);
        dispatch({ type: "ADD_CONTACT", payload: contact });
    };

    const handleEditContact = (contact: Contact) => {
        console.log("Editing contact:", contact);
        setEditingContact(contact);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleUpdateContact = (contact: Contact) => {
        console.log("Updating contact:", contact);
        dispatch({ type: "UPDATE_CONTACT", payload: contact });
        setEditingContact(null);
    };

    const handleCancelEdit = () => {
        console.log("Cancelling edit");
        setEditingContact(null);
    };

    const handleRemoveContact = (id: number) => {
        console.log("Removing contact with id:", id);
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
                <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300">
                    <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Contacts
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white/5 backdrop-blur-sm border-collapse rounded-xl overflow-hidden shadow-lg">
                            <thead>
                                <tr className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
                                    <th className="py-4 px-6 text-left font-semibold">Nom</th>
                                    <th className="py-4 px-6 text-left font-semibold">Prénom</th>
                                    <th className="py-4 px-6 text-left font-semibold">Email</th>
                                    <th className="py-4 px-6 text-left font-semibold">Téléphone</th>
                                    <th className="py-4 px-6 text-left font-semibold">Date de naissance</th>
                                    <th className="py-4 px-6 text-left font-semibold">Actions</th>
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
                                        <tr key={c.id} className={`${isBirthday ? "bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border-l-4 border-yellow-400 backdrop-blur-sm" : "hover:bg-white/10"} transition-all duration-300`}>
                                            <td className="py-4 px-6 border-b border-white/10 text-white">{c.name}</td>
                                            <td className="py-4 px-6 border-b border-white/10 text-white">{c.surname}</td>
                                            <td className="py-4 px-6 border-b border-white/10 text-white">{c.email}</td>
                                            <td className="py-4 px-6 border-b border-white/10 text-white">{c.tel}</td>
                                            <td className="py-4 px-6 border-b border-white/10 text-white">{isBirthday ? `${c.birthday} (${age} ans)` : c.birthday}</td>
                                            <td className="py-4 px-6 border-b border-white/10">
                                                <button
                                                    className="mr-3 px-4 py-2 bg-blue-500/80 backdrop-blur-sm text-white rounded-xl hover:bg-blue-600/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20"
                                                    onClick={() => handleEditContact(c)}
                                                >
                                                    Modifier
                                                </button>
                                                <button className="px-4 py-2 bg-red-500/80 backdrop-blur-sm text-white rounded-xl hover:bg-red-600/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20" onClick={() => handleRemoveContact(c.id)}>Supprimer</button>
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