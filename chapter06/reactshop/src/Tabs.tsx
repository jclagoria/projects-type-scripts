import * as React from "react";

interface IState {
    activateHeading: string;
}

interface ITabProps {
    name: string;
    initialActive?: boolean;
}

class Tabs extends React.Component<{}, IState> {

    public static Tab: React.FC<ITabProps> = props => <li>{props.children}</li>;

    public render() {
        return (
            <ul className="tabs">
                {this.props.children}
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