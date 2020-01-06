import * as React from "react";

interface IState {
    activeName: string;
}

interface ITabProps {
    name: String;
    initialActive?: boolean;
    heading: () => string | JSX.Element;
}

interface ITabsContext {
    activeName?: string;
    handleTabClick?: (name: string) => void;
}

const TabsContext = React.createContext<ITabsContext>({});

class Tabs extends React.Component<ITabProps, IState> {

    public static Tab: React.FC<ITabProps> = props => (
        <TabsContext.Consumer>
            {
                (context: ITabsContext) => {
                    const activeName =  context.activeName
                        ? context.activeName : props.initialActive
                            ? props.name : "";
                    const handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
                        if(context.handleTabClick){
                            context.handleTabClick(props.name.toString());
                        }
                    };
                    return (
                        <li onClick={handleTabClick}
                            className={props.name === activeName ? "active" : ""}>
                            {props.heading()}
                        </li>
                    );
                }
            }
        </TabsContext.Consumer>
    );

    public render() {
        return (
            <TabsContext.Provider
                value={{activeName: this.state ? this.state.activeName : "",
                handleTabClick: this.handleTabClick}}>
                <ul className="tabs">{this.props.children}</ul>
            </TabsContext.Provider>
        );
    }

    private handleTabClick = (name: string) => {
       this.setState({activeName: name});
    };
}

export default Tabs;