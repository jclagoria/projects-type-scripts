import * as React from "react";

import { Form, minLenght, required} from "./Form";

const ContactUs: React.FC = () => {
    return (
        <Form defaultValues={{name: "", email: "", reason: "Support", notes: ""}}
              validationRules={{
                  email: {validator: required},
                  name: [{validator: required}, {validator: minLenght, args: 2}]
              }}>
            <Form.Field label="Your name" name="name" />
            <Form.Field label="Your email address" name="email" type="Email" />
            <Form.Field label="Reason you need to contact us"
                        name="reason" type="Select"
                        options={["Marketing", "Support", "Jobs", "Other"]} />
            <Form.Field label="Additional notes"
                        name="notes" type="TextArea" />
        </Form>
    );
};

export default ContactUs;