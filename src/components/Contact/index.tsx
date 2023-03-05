import { Column } from "../common/Box";
import Title from "../common/Title";
import ContactForm from "./ContactForm";
import { contact } from "data/contact";

const Contact = () => {
  return (
    <Column fullH fullW>
      <Title title={contact.title} />
      <ContactForm />
    </Column>
  );
};

export default Contact;
