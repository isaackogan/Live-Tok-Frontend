import {Component} from "react";
import styled from "styled-components";
import Countdown from "./Countdown";

const GiveawayContainer = styled.div`
  height: 320px;
  background-color: #f6f6f6;
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  font-family: Rubik, Arial, sans-serif;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SectionTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #131313;
  margin-top: 4px;
`;

const GiveawayDesc = styled.span`
  font-size: 20px;
  color: #424242;
`;

const GiveawayInfo = styled.span`
  font-size: 20px;
  color: #3d3d3d;
`;

const Hyperspanner = styled.div`
  width: 90%;
  height: 1px;
  background-color: #d7d7d7;
  float: bottom;
  margin-top: 7px;
  margin-bottom: 40px;
`;


class Giveaway extends Component {
    endTime;

    constructor(props) {
        super(props);
        this.endTime = 1649305995;


    }

    render() {

        return (
            <GiveawayContainer>
                <InnerContainer>
                    <SectionTitle>LIVE Giveaway</SectionTitle>
                    <Hyperspanner />
                    <GiveawayDesc>1x Banana Split</GiveawayDesc>
                    <Countdown endTime={this.endTime} />
                    <GiveawayInfo>40 Registered</GiveawayInfo>
                    <GiveawayInfo>Join Word: Pizza</GiveawayInfo>
                </InnerContainer>
            </GiveawayContainer>
        )
    }

}

export default Giveaway;
