import { useState } from "react";
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
    
    return (
        <>
        <Header title="Bienvenue sur le carnet d'adresse" />

        <main>
            <Form>
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


        </main>
        <Footer content="© 2026 Carnet d'Adresses" />
        </>
    );
}

export default Homepage;