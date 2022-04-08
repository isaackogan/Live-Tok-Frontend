import {Component} from "react";
import styled from "styled-components";

const GiveawayContainer = styled.div`
  height: 305px;
  background-color: #f6f6f6;
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  font-family: Rubik, Arial, sans-serif;
  margin-top: 35px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  padding-left: 30px;
  padding-right: 30px;
`;

const SectionTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #131313;
`;

const BodyText = styled.span`
  font-size: 14px;
  color: #424242;
  margin-top: 10px;
`;


const Hyperspanner = styled.div`
  width: 90%;
  height: 1px;
  background-color: #d7d7d7;
  float: bottom;
  margin-top: 10px;
  margin-bottom: 10px;
`;


class StreamInfo extends Component {

    endTime;

    constructor(props) {
        super(props);
        this.endTime = 1649305995;


    }

    render() {

        return (
            <GiveawayContainer>
                <InnerContainer>
                    <SectionTitle>What's this?</SectionTitle>
                    <Hyperspanner />
                    <BodyText>
                        Welcome to LiveTok!
                        <br/><br/>
                        Every time you interact with the creator's stream (e.g. gifts, comments, likes) you gain XP.
                        <br/><br/>
                        A higher level means a higher chance to win giveaways.
                        <br/><br/>
                        Most importantly, remember to have fun & relax!
                    </BodyText>
                </InnerContainer>

            </GiveawayContainer>
        )
    }

}

export default StreamInfo;
