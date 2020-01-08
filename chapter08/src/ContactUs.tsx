import * as React from "react";

import { Form, ISubmitResult, IValues, minLenght, required} from "./Form";

interface IProps {
    onSubmit: (values: IValues) => Promise<ISubmitResult>;
}

const ContactUs: React.FC<IProps> = props => {

    const handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
        const result = await props.onSubmit(values);
        return result;
    };

    return (
        <Form defaultValues={{name: "", email: "", reason: "Support", notes: ""}}
              validationRules={{
                  email: {validator: required},
                  name: [{validator: required}, {validator: minLenght, args: 2}]
              }} onSubmit={handleSubmit} >
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