import { useReducer, useEffect } from "react";
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

    useEffect(() => {
        dispatch({ type: "SET_CONTACTS", payload: loadContacts() });
    }, []);

    useEffect(() => {
        saveContacts(contacts);
    }, [contacts]);

    const handleAddContact = (contact: Contact) => {
        dispatch({ type: "ADD_CONTACT", payload: contact });
    };

    const handleRemoveContact = (id: number) => {
        dispatch({ type: "REMOVE_CONTACT", payload: id });
    };


    return (
        <>
        <Header title="Bienvenue sur le carnet d'adresse" />

        <main>
            <Form handleSubmit={handleAddContact}>
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
                <section style={{ marginTop: 24 }}>
                    <h2>Contacts</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Email</th>
                                <th>Téléphone</th>
                                <th>Date de naissance</th>
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
                                        <tr key={c.id} style={{ backgroundColor: isBirthday ? "#fef9c3" : "transparent" }}>
                                            <td>{c.name}</td>
                                            <td>{c.surname}</td>
                                            <td>{c.email}</td>
                                            <td>{c.tel}</td>
                                            <td>{c.birth}</td>
                                            <td>
                                                <button style={{ color: "red" }} onClick={() => handleRemoveContact(c.id)}>Supprimer</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </section>
            )}
        </main>
        <Footer content="© 2026 Carnet d'Adresses" />
        </>
    );
}

export default Homepage;