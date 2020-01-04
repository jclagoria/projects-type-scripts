import * as React from "react";

interface IProps {
    headings: string[];
}

interface IState {
    activateHeading: string;
}

class Tabs extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            activateHeading: this.props.headings
                && this.props.headings.length > 0 ?
                this.props.headings[0]: ""
        };
    }

    public render() {
        return (
            <ul className="tabs">
                {
                    this.props.headings.map(heading => (
                        <li onClick={this.handleTabClick}
                            className={heading === this.state.activateHeading ? "active" : ""}>
                            {heading}
                        </li>
                    ))
                }
            </ul>
        );
    }

    private handleTabClick = (e: React.MouseEvent<HTMLLIElement> ) => {
        const li = e.target as HTMLLIElement;
        const heading: string = li.textContent ? li.textContent: "";
        this.setState({activateHeading: heading});
    };

}

export default  Tabs;