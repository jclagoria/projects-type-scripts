import React, { Component } from "react";

import Confirm from  "./Confirm";

import logo from './logo.svg';
import './App.css';

interface IState {
    confirmOpen: boolean;
    confirmMessage: string;
    confirmVisible: boolean;
    countDown: number;
}

class App extends React.Component<{}, IState> {

  private timer = 0;
  private renderCount = 0;

  constructor(props: {}) {
    super(props);
    this.state = {
        confirmOpen: false,
        confirmMessage: "Please hit the confirm button",
        confirmVisible: true,
        countDown: 10
    };
  }

  public componentDidMount(): void {
      this.timer = window.setInterval(
          () => this.handleTimerTick(),
          1000);
  }

  public componentWillUnmount(): void {
      clearInterval(this.timer);
  }

  public static getDerivedStateFromProps(props: {}, state: IState) {
      console.log("getDerivedStateFromProps ", props, state);
      return null;
  }

  public getSnapshotBeforeUpdate(prevProps: {}, prevState: IState) {
      this.renderCount += 1;
      console.log("getSnapshotBeforeUpdate", prevProps, prevState, {
          renderCount: this.renderCount
      });
      return this.renderCount;
  }

  public componentDidUpdate(prevProps: {}, prevState: IState, snapshot: number): void {
      console.log("componentDidupdate", prevState, prevState,
          snapshot, {
            renderCount: this.renderCount
          });
  }

  public shouldComponentUpdate(nextProps: {}, nextState: IState) {
      console.log("shouldComponentUpdate", nextProps, nextState);
      return true;
  }



    public render() {

      return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link" href="https://reactjs.org" target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>

              <p>
                 {this.state.confirmMessage}
              </p>

              {this.state.confirmVisible && (
                  <button onClick={this.handleConfirmClick}>Confirm</button>
              )}

            <Confirm
                open={this.state.confirmOpen}
                title="React and TypeScrypt"
                content="Are you sure you want to learn Ract and TypeScript?"
                onCancelClick={this.handleCancelConfirmClick}
                onOkClick={this.handleOkConfirmClick}
            />

          </div>
        );
    }

      private handleCancelConfirmClick = () => {
        this.setState({
            confirmOpen: false,
            confirmMessage: "Take a breack, I'm sure you will later..."
        });
        clearInterval(this.timer);
      };

      private handleOkConfirmClick = () => {
        this.setState({
            confirmOpen: false,
            confirmMessage: "Cool, carry on reading!"
        });
        clearInterval(this.timer);
      };

      private handleConfirmClick = () => {
        this.setState({
            confirmOpen: true
        });
        clearInterval(this.timer);
      };

        private handleTimerTick() {
            this.setState(
                {
                    confirmMessage: `Please hit the confirm button 
                            ${        this.state.countDown      } secs to go`,
                    countDown: this.state.countDown - 1
                },
                () => {
                    if (this.state.countDown <= 0) {
                        clearInterval(this.timer);
                        this.setState(
                            {
                                confirmMessage: "Too late to confirm!",
                                confirmVisible: false
                            }
                            );
                    }
                }
                );
        }

    }

export default App;

