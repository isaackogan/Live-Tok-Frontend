import styled from "styled-components";
import {Component} from "react";
import Config from "../../../../index";
import Cookies from "universal-cookie";

const GiveawayContainer = styled.div`
  width: 23%;
  height: 520px;
  background-color: #f6f6f6;
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  font-family: Rubik, Arial, sans-serif;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`;

const ControlButton = styled.button`
  border: none;
  outline: none;
  background-color: black;
  padding: 15px;
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
  margin-bottom: 25px;
`;


const InnerContainer = styled.div`
  padding: 30px 20px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class ControlGiveaway extends Component {
    authorization;

    constructor(props) {
        super(props);

        if (this.props.giveaway == null) {
            this.state = {loading: false, started: false}
        } else {
            let active = this.props.giveaway["ended_at"] == null;
            this.state = {loading: false, started: active}
        }

        const cookies = new Cookies();
        this.authorization = cookies.get("authorization")

        this.startGiveaway = this.startGiveaway.bind(this);
        this.endGiveaway = this.endGiveaway.bind(this);
        this.updateGiveaway = this.updateGiveaway.bind(this);
        this.cancelGiveaway = this.cancelGiveaway.bind(this);

    }

    getConfigValues() {
        const cookies = new Cookies();

        let config = {
            "prize_name": cookies.get("giveawayPrizeName") || null,
            "keyword":  cookies.get("giveawayJoinWord") || null,
            "winners":  cookies.get("giveawayWinnerCount") || null,
            "duration":  cookies.get("giveawayDuration") || null
        }

        if (!(config["prize_name"] && config["keyword"] && config["winners"] && config["duration"])) {
            return null;
        }

        return config;
    }

    startGiveaway(event) {
        event.preventDefault();

        if (this.state.started || this.state.loading) {
            return;
        }

        let config = this.getConfigValues();
        if (config == null) {
            alert("Please fill out all giveaway data!")
            return;
        }

        this.setState({loading: true})
        fetch(Config.backend_api_url + `creator/dashboard/giveaway?authorization=${this.authorization}`,
            {
                "method": "PUT",
                "headers": {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                "body": JSON.stringify(config)
            }).then(res => res.json())
            .then((response) => {

                if (response.status === 400) {
                    alert("Authentication Failed!");
                }

                else if (response.status === 404) {
                    alert("Not currently tracking you! Start LiveTok before making a giveaway.");
                }

                else if (response.status === 200) {
                    this.setState({started: true})
                }

                else if (response.status === 401) {
                    this.setState({started: true})
                    alert("Already running a giveaway!")
                }

                this.setState({"loading": false})
            });

    }

    cancelGiveaway(event) {
        event.preventDefault();

        if ((!this.state.started) || this.state.loading) {
            return;
        }

        this.setState({loading: true})
        fetch(Config.backend_api_url + `creator/dashboard/giveaway?authorization=${this.authorization}&pick_winner=false`,
            {"method": "DELETE"}).then(res => res.json())
            .then((response) => {

                if (response.status === 400) {
                    alert("Authentication Failed!");
                }

                else if (response.status === 404) {
                    this.setState({started: false})
                    alert("There is no giveaway currently running!");
                }

                else if (response.status === 200) {
                    this.setState({started: false})
                }

                this.setState({"loading": false})
            });
    }

    endGiveaway(event) {
        event.preventDefault();

        if ((!this.state.started) || this.state.loading) {
            return;
        }

        this.setState({loading: true})
        fetch(Config.backend_api_url + `creator/dashboard/giveaway?authorization=${this.authorization}&pick_winner=true`,
            {"method": "DELETE"}).then(res => res.json())
            .then((response) => {

                if (response.status === 400) {
                    alert("Authentication Failed!");
                }

                else if (response.status === 404) {
                    this.setState({started: false})
                    alert("There is no giveaway currently running!");
                }

                else if (response.status === 200) {
                    let winners = response.payload["winners"]
                    if (winners == null || winners.length < 1) {
                        alert("Giveaway ended! There were no winners.")
                    } else {
                        alert("Giveaway ended! " + winners.join(", ") + " won the giveaway!")
                    }

                    this.setState({started: false})
                }

                this.setState({"loading": false})
            });
    }

    updateGiveaway(event) {
        event.preventDefault();

        if ((!this.state.started) || this.state.loading) {
            return;
        }

        let config = this.getConfigValues();
        if (config == null) {
            alert("Please fill out all giveaway data!")
            return;
        }

        this.setState({loading: true})
        fetch(Config.backend_api_url + `creator/dashboard/giveaway?authorization=${this.authorization}`,
            {
                "method": "PATCH",
                "headers": {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                "body": JSON.stringify(config)
            }).then(res => res.json())
            .then((response) => {

                if (response.status === 400) {
                    alert("Authentication Failed!");
                }

                else if (response.status === 404) {
                    this.setState({started: false})
                    alert("There is no giveaway currently running!");
                }

                else if (response.status === 200) {
                    this.setState({started: true})
                }

                this.setState({"loading": false})
            });

    }



    render() {
        let startStyle = this.state.loading || this.state.started ? {"opacity": 0.6, "cursor": "default"} : {}
        let stopStyle = this.state.loading || !this.state.started ? {"opacity": 0.6, "cursor": "default"} : {}

        return (
            <GiveawayContainer>
                <InnerContainer>
                    <SectionTitle>Giveaway Controls</SectionTitle>
                    <Hyperspanner />

                    <form onSubmit={this.startGiveaway} style={{"marginBottom": "15px"}}>
                        <ControlButton style={Object.assign({}, startStyle, {"paddingLeft": "28px", "paddingRight": "28px"})}>
                            Start Giveaway
                            <BodyText>Begin a TikTok LIVE Giveaway</BodyText>
                        </ControlButton>
                    </form>

                    <form onSubmit={this.cancelGiveaway}  style={{"marginBottom": "15px"}}>
                        <ControlButton style={stopStyle}>
                            Cancel Giveaway
                            <BodyText>Cancel your TikTok LIVE Giveaway</BodyText>
                        </ControlButton>
                    </form>

                    <form onSubmit={this.endGiveaway} style={{"marginBottom": "15px"}}>
                        <ControlButton style={stopStyle}>
                            End Giveaway
                            <BodyText>End the giveaway & pick a winner</BodyText>
                        </ControlButton>
                    </form>

                    <form onSubmit={this.updateGiveaway} style={{"marginBottom": "5px"}}>
                        <ControlButton style={stopStyle}>
                            Update Giveaway
                            <BodyText>End the giveaway & pick a winner</BodyText>
                        </ControlButton>
                    </form>

                </InnerContainer>
            </GiveawayContainer>
        );
    }

}

export default ControlGiveaway;
