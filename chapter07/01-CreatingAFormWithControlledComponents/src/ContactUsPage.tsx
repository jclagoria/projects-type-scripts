import * as React from "react";

import { ISubmitResult, IValues } from "./Form";

import ContactUs from "./ContactUs";

const wait = (ms: number) : Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

class ContactUsPage extends React.Component<{}, {}> {

    public render() {
        return (
            <div className="page-container">
                <h1>Contact Us</h1>
                <p>
                    If you enter your details we'll get back to you as soon as we can.
                </p>
                <ContactUs onSubmit={this.handleSubmit}/>
            </div>
        );
    }

    private handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
        await wait(1000);
        return{

            success: true
        };
    };

}

export default ContactUsPage;