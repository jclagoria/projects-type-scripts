import * as React from "react";

interface IState {
    activeName: string;
}

interface ITabProps {
    name: String;
    initialActive?: string;
}

class Tabs extends React.Component<ITabProps, IState> {

    public static Tab: React.FC<ITabProps> = props => <li>{props.children}</li>;

    public render() {
        return (
            <ul className="tabs">
                {this.props.children}
            </ul>
        );
    }

    private handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const li = e.target as HTMLLIElement;
        const heading: string = li.textContent ? li.textContent : "";
        this.setState({activeHeading: heading})
    };
}

export default Tabs;