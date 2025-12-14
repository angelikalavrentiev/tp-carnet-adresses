import { useState, FormEvent } from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Form from "../../organism/Form";
import FormGroup from "../../molecule/FormGroup";
import FormLabel from "../../atom/FormLabel";
import FormInputEmail from "../../atom/FormInputEmail";
import FormInputName from "../../atom/FormInputName";
import FormInputSurname from "../../atom/FormInputSurname";
import FormInputTel from "../../atom/FormInputTel";
import FormInputBirth from "../../atom/FormInputBirth";

const Homepage = () => {
    type Contact = {
        name?: string;
        surname?: string;
        email?: string;
        tel?: string;
        birthday?: string;
    };

    const [contacts, setContacts] = useState<Contact[]>([]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        const contact: Contact = {
            name: data.get("name")?.toString() || "",
            surname: data.get("surname")?.toString() || "",
            email: data.get("email")?.toString() || "",
            tel: data.get("tel")?.toString() || "",
            birthday: data.get("birthday")?.toString() || "",
        };

        setContacts((prev) => [...prev, contact]);

        // reset form fields
        form.reset();
    };

    return (
        <>
        <Header title="Bienvenue sur le carnet d'adresse" />

        <main>
            <Form handleSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel content="Nom" inputId="" />
                    <FormInputName inputName="name" inputId="name" />
                </FormGroup>
                <FormGroup>
                    <FormLabel content="Prénom" inputId="" />
                    <FormInputSurname inputName="surname" inputId="surname" />
                </FormGroup>
                <FormGroup>
                    <FormLabel content="Email" inputId="" />
                    <FormInputEmail inputName="email" inputId="email" />
                </FormGroup>
                <FormGroup>
                    <FormLabel content="Téléphone" inputId="" />
                    <FormInputTel inputName="tel" inputId="tel"/>
                </FormGroup>
                <FormGroup>
                    <FormLabel content="Date de naissance" inputId="" />
                    <FormInputBirth inputName="birthday" inputId="birthday"/>
                </FormGroup>
            </Form>
            {/* Affichage du tableau des contacts ajoutés */}
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
                            {contacts.map((c, i) => (
                                <tr key={i}>
                                    <td>{c.name}</td>
                                    <td>{c.surname}</td>
                                    <td>{c.email}</td>
                                    <td>{c.tel}</td>
                                    <td>{c.birthday}</td>
                                </tr>
                            ))}
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