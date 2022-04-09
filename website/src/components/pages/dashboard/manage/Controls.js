import styled from "styled-components";
import {Component} from "react";
import Config from "../../../../index";
import Cookies from "universal-cookie";

const GiveawayContainer = styled.div`
  width: 20%;
  height: 520px;
  background-color: #f6f6f6;
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  font-family: Rubik, Arial, sans-serif;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ControlButton = styled.button`
  border: none;
  outline: none;
  background-color: black;
  padding: 20px;
  color: white;
  font-family: Rubik, Arial, sans-serif;
  font-size: 23px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  :active {
    opacity: 0.8;
  }
`;

const SectionTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #131313;
`;

const BodyText = styled.span`
  font-size: 14px;
  color: #ffffff;
  margin-top: 10px;
  font-weight: lighter;
`;


const Hyperspanner = styled.div`
  width: 90%;
  height: 1px;
  background-color: #d7d7d7;
  float: bottom;
  margin-top: 10px;
  margin-bottom: 45px;
`;


const InnerContainer = styled.div`
  padding: 30px 20px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class Controls extends Component {
    authorization;

    constructor(props) {
        super(props);

        const cookies = new Cookies();
        this.authorization = cookies.get("authorization");
        this.state = { loading: false, started: this.props.tracking}

        this.startStream = this.startStream.bind(this);
        this.stopStream = this.stopStream.bind(this);
        this.logOut = this.logOut.bind(this);

    }

    startStream(event) {
        event.preventDefault();
        if (this.state.started || this.state.loading) {
            return;
        }

        this.setState({loading: true})
        fetch(Config.backend_api_url + `creator/dashboard/start?authorization=${this.authorization}`, {"method": "POST"})
            .then(res => res.json())
            .then((response) => {

                if (response.status === 400) {
                    alert("Already Started!");
                    this.setState({started: true});
                }

                else if (response.status === 404) {
                    alert("Not currently streaming!");
                }

                else if (response.status === 200) {
                    this.setState({started: true})
                }

                else {
                    alert("Failed to start tracking!")
                }

                this.setState({"loading": false})
            });


    }

    stopStream(event) {
        event.preventDefault();
        if (!this.state.started || this.state.loading) {
            return;
        }

        this.setState({loading: true})
        fetch(Config.backend_api_url + `creator/dashboard/stop?authorization=${this.authorization}`, {"method": "POST"})
            .then(res => res.json())
            .then((response) => {

                if (response.status === 200) {
                    this.setState({"loading": false, started: false})
                }

                else {
                    alert("Failed to stop tracking!")
                }
            });

    }

    logOut(event) {
        event.preventDefault();
        const cookies = new Cookies();
        cookies.remove("authorization", {path: "/manage"})
        window.location.href = "/";
    }

    render() {
        let startStyle = this.state.loading || this.state.started ? {"opacity": 0.6, "cursor": "default"} : {}
        let stopStyle = this.state.loading || !this.state.started ? {"opacity": 0.6, "cursor": "default"} : {}

        return (
            <GiveawayContainer>
                <InnerContainer>
                    <SectionTitle>Main Controls</SectionTitle>
                    <Hyperspanner />

                    <form onSubmit={this.startStream} style={{"marginBottom": "30px"}}>
                        <ControlButton style={startStyle}>
                            Start LiveTok
                            <BodyText>Start tracking chat messages</BodyText>
                        </ControlButton>
                    </form>

                    <form onSubmit={this.stopStream}  style={{"marginBottom": "30px"}}>
                        <ControlButton style={stopStyle}>
                            Stop LiveTok
                            <BodyText>Stop tracking chat messages</BodyText>
                        </ControlButton>
                    </form>

                    <form onSubmit={this.logOut} style={{"marginBottom": "10px"}}>
                        <ControlButton>
                            Log Out
                            <BodyText>Log out of this creator account</BodyText>
                        </ControlButton>
                    </form>

                </InnerContainer>
            </GiveawayContainer>
        );
    }

}

export default Controls;
