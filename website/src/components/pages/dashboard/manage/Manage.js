import styled from "styled-components";
import {Component} from "react";
import ControlPrimary from "./ControlPrimary";
import DashboardTitle from "./DashboardTitle";
import Particulate from "../../../particles";
import ManageGiveaway from "./ManageGiveaway";
import ControlGiveaway from "./ControlGiveaway";
import Config from "../../../../index";
import Cookies from "universal-cookie";
import LiveChat from "./LiveChat";

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  margin-top: 3px;
`;

const InnerContainer = styled.div`
  width: 90%;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.4);
`;


const SuperInnerContainer = styled.div`
  width: 100%;
  margin-top: 4%;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-position: center;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.4);

`;

class Manage extends Component {
    authorization;

    constructor(props) {
        super(props);
        const cookies = new Cookies();
        this.authorization = cookies.get("authorization")

        this.state = {dashboard_data: this.props.dashboard_data}

    }

    componentDidMount() {
        this.interval = setInterval(() => this.updateData(), 10000);
    }

    updateData() {

        if (this.authorization) {
            fetch(Config.backend_api_url + `creator/dashboard?authorization=${this.authorization}`)
                .then(res => res.json())
                .then((response) => {
                    let payload = response.payload;

                    if (response.status === 404) {
                        alert("Authentication expired. Redirecting to main page!")
                        window.location.href = "/"
                        return;
                    }

                    if (response.status === 200) {
                        if (payload != null) {
                            this.setState({
                                dashboard_data: payload
                            });
                        }

                    }


                });
        }

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // Chat Stuff (Graph, Top Chatter, Export Chat-logs)
    render() {

        return (
            <HomeContainer>
                <Particulate />
                <InnerContainer>
                    <DashboardTitle key={Math.random().toString(36).substring(2)} creator_id={this.state.dashboard_data["unique_id"]} />
                    <SuperInnerContainer>
                        <ControlPrimary key={Math.random().toString(36).substring(2)} tracking={this.state.dashboard_data["tracking"]}/>
                        <ManageGiveaway key={Math.random().toString(36).substring(2)} giveaway={this.state.dashboard_data["giveaway"]} />
                        <ControlGiveaway key={Math.random().toString(36).substring(2)} giveaway={this.state.dashboard_data["giveaway"]}/>
                        <LiveChat creator_id={this.state.dashboard_data["unique_id"]} />
                    </SuperInnerContainer>
                </InnerContainer>
            </HomeContainer>
        )
    }

}

export default Manage;
