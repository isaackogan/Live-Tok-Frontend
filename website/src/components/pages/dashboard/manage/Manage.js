import styled from "styled-components";
import {Component} from "react";
import ControlPrimary from "./ControlPrimary";
import DashboardTitle from "./DashboardTitle";
import Particulate from "../../../particles";
import ManageGiveaway from "./ManageGiveaway";
import ControlGiveaway from "./ControlGiveaway";

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
  width: 90%;
  margin-top: 4%;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-position: center;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.4);

`;

class Manage extends Component {

    constructor(props) {
        super(props);
    }


    // Giveaways (# of Winners, Prize Name, Countdown, Join Word, Stop, Start, Re-Roll)
    // Chat Stuff (Graph, Top Chatter, Export Chat-logs)
    render() {

        return (
            <HomeContainer>
                <Particulate />
                <InnerContainer>
                    <DashboardTitle creator_id={this.props.dashboard_data["unique_id"]} />
                    <SuperInnerContainer>
                        <ControlPrimary tracking={this.props.dashboard_data["tracking"]}/>
                        <ManageGiveaway />
                        <ControlGiveaway giveaway={this.props.dashboard_data["giveaway"]}/>
                    </SuperInnerContainer>
                </InnerContainer>
            </HomeContainer>
        )
    }

}

export default Manage;
