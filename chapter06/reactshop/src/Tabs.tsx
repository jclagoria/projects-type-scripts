import * as React from "react";

interface IProps {
    heandings: string[];
}

interface IState {
    activeHeading: string;
}

class Tabs extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            activeHeading: this.props.heandings
            && this.props.heandings.length > 0 ?
                this.props.heandings[0] : ""
        };
    }

    public render() {
        return (
            <ul className="tabs">
                {this.props.heandings.map( heading =>(
                  <li onClick={this.handleTabClick}
                      className={heading === this.state.activeHeading
                      ? "active" : ""}>
                      {heading}
                  </li>
                ))}
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