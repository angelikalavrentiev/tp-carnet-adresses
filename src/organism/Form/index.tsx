import FormSubmit from "../../atom/FormSubmit";

const HomepageForm = ({ handleSubmit, children }) => {
    return (
        <form onSubmit={handleSubmit} className="">
            {children}

            <FormSubmit content="Ajouter" />
        </form>
    );
}
export default HomepageForm;