import { Column } from "../common/Box";
import Title from "../common/Title";
import ContactForm from "./ContactForm";
import { contact } from "data/contact";

const Contact = () => {
  return (
    <>
      <Title title={contact.title} />
      <ContactForm />
    </>
  );
};

export default Contact;
