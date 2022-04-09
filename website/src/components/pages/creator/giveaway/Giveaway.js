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
  text-align: center;
  justify-items: center;
  justify-content: center;
  align-items: center;
  display: flex;
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


const GiveawayWinners = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

const GiveawayWinner = styled.span`
  font-weight: lighter;
`;

const WinnerText = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

class Giveaway extends Component {
    data;

    constructor(props) {
        super(props);
        this.data = this.props.data;

        console.log(this.data)

    }

    /**
     * Via StackOverflow (lazy)
     * https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
     *
     */
    titleCase(str) {
        let splitStr = str.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }

    getWinners(winners) {
        let obj = []

        if (winners.length < 1) {
            obj.push(<GiveawayWinner key="no-winners">There were no winners!</GiveawayWinner>)
        }

        for (let winner of winners) {
            obj.push(
                <GiveawayWinner key={Math.random().toString(36).substring(2)}>
                   {winner}
                </GiveawayWinner>
            )
        }

        return obj;


    }

    render() {

        // No Giveaway
        if (this.data == null) {
            return (
                <GiveawayContainer>
                    <InnerContainer>
                        <SectionTitle>No Giveaway</SectionTitle>
                        <Hyperspanner />
                        <GiveawayDesc>There's no active giveaway right now!</GiveawayDesc>
                        <br/>
                        <GiveawayDesc>Come back later, maybe there might be one!</GiveawayDesc>
                        <br/>
                        <GiveawayDesc>For now, skedaddle!</GiveawayDesc>
                    </InnerContainer>
                </GiveawayContainer>
            )
        }

        let percent;
        if (!this.data["registered"] || this.data["registered"].length <= 0) {
            percent = 100;
        } else {
            percent = ((this.data["winner_count"] / this.data["registered"]) * 100)
        }

        // Winner
        let active = this.data["ended_at"] == null;
        if (!active) {
            return (
                <GiveawayContainer>
                    <InnerContainer style={{ "height": "280px"}}>
                        <SectionTitle>LIVE Giveaway</SectionTitle>
                        <Hyperspanner style={{marginBottom: "20px"}}/>
                        <GiveawayDesc>{this.data["winner_count"]}x {this.titleCase(this.data["name"])}</GiveawayDesc>
                        <br/>
                        <GiveawayWinners>
                            <WinnerText>Winners:</WinnerText>
                            {this.getWinners(this.data["winners"])}
                        </GiveawayWinners>
                        <GiveawayDesc>{percent < 1 ? Math.round(percent * 10000) / 10000  : percent > 100 ? 100 : Math.round(percent * 10) / 10}% Chance</GiveawayDesc>
                    </InnerContainer>
                </GiveawayContainer>
            )
        }

        // No Winner Yet
        return (
            <GiveawayContainer>
                <InnerContainer>
                    <SectionTitle>LIVE Giveaway</SectionTitle>
                    <Hyperspanner />
                    <GiveawayDesc>{this.data["winner_count"]}x {this.titleCase(this.data["name"])}</GiveawayDesc>
                    <Countdown endTime={this.data["end_time"]} />
                    <GiveawayInfo>{this.data["registered"]} Registered</GiveawayInfo>
                    <GiveawayInfo>Join Word: {this.data["join_word"]}</GiveawayInfo>
                </InnerContainer>
            </GiveawayContainer>
        )
    }

}

export default Giveaway;
