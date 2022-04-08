import styled from "styled-components";
import {Component} from "react";

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
  margin-top: 5%;
  display: flex;
  padding-bottom: 150px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  background-position: center;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.4);

`;

const GiveawayContainer = styled.div`
  width: 20%;
  height: 620px;
  background-color: #f6f6f6;
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  font-family: Rubik, Arial, sans-serif;
  align-items: center;
  display: flex;
  
`;

class Connect extends Component {
    //                 <Particulate color1="#828282" color2="#828282"/>
    render() {
        return (
            <HomeContainer>
                <InnerContainer>
                    <GiveawayContainer>Giveaways (# of Winners, Prize Name, Countdown, Join Word, Stop, Start, Re-Roll)</GiveawayContainer>
                    <GiveawayContainer>Chat Stuff (Graph, Top Chatter, Export Chat-logs)</GiveawayContainer>
                    <GiveawayContainer>Copy of LiveChat</GiveawayContainer>

                </InnerContainer>
            </HomeContainer>
        )
    }

}

export default Connect;
