import * as React from "react";

import { Form} from "./Form";

const ContactUs: React.FC = () => {
    return (
        <Form defaultValules={{name: "", email: "", reason: "Support", notes: ""}}>
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