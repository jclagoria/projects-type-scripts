import * as React from "react";

export interface IValues {
    [key: string]: any;
}

interface IFormProps {
    defaultValules: IValues;
}

interface IState {
    values: IValues;
}

export class Form extends React.Component<IFormProps, IState> {
    constructor(props: IFormProps) {
        super(props);
        this.state = {
          values: props.defaultValules
        };
    }

    public render() {
        return (
            <form className="form" noValidate={true}>
                {this.props.children}
            </form>
        );
    }
}