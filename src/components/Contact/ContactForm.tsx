import { useFormik } from "formik";
import * as Yup from "yup";
import { Column } from "../common/Box";
import { Text } from "../common/Text";
import { Form, Input, Textarea, Button } from "./index.styled";
import { validateContactForm } from "schemas/contactFormSchema";

type FieldValuesType = {
  fullName: string;
  email: string;
  message: string;
};

const initialValues: FieldValuesType = {
  fullName: "",
  email: "",
  message: "",
};

interface ErrorTextProps {
  fw: number;
  color: string;
  lh: number;
}

const errorTextProps: ErrorTextProps = {
  fw: 700,
  color: "#ef4444",
  lh: 1.5,
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validateContactForm()),
    onSubmit: (values: FieldValuesType) => {
      // Fix to be able to send emails
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Column fullH fullW p="2rem">
      <Form onSubmit={formik.handleSubmit}>
        <Input
          name="fullName"
          type="text"
          placeholder="Full Name"
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <Text {...errorTextProps}>{formik.errors.fullName}</Text>
        )}
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <Text {...errorTextProps}>{formik.errors.email}</Text>
        )}
        <Textarea
          name="message"
          placeholder="Your Message"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message && (
          <Text {...errorTextProps}>{formik.errors.message}</Text>
        )}
        <Button type="submit">Submit</Button>
      </Form>
    </Column>
  );
};

export default ContactForm;
