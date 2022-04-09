import styled from "styled-components";
import React, {Component} from "react";
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
  margin-left: 35px;
`;

const SectionTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #131313;
`;

const Hyperspanner = styled.div`
  width: 90%;
  height: 1px;
  background-color: #d7d7d7;
  float: bottom;
  margin-top: 10px;
  margin-bottom: 35px;
`;


const InnerContainer = styled.div`
  padding: 30px 20px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.input`
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: #b3b3b3;
  color: #000000;
  text-align: center;
  font-size: 18px;
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  font-family: Rubik, Arial, sans-serif;
`;

const ManageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const BodySubText = styled.span`
  font-size: 14px;
  color: #000000;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: lighter;
`;

/**
 * Via https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
 * @param str
 * @returns {boolean}
 */
function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}

class ManageGiveaway extends Component {
    authorization;

    constructor(props) {
        super(props);
        const cookies = new Cookies();

        this.state = {
            giveawayPrizeName: cookies.get("giveawayPrizeName"),
            giveawayJoinWord: cookies.get("giveawayJoinWord"),
            giveawayWinnerCount: cookies.get("giveawayWinnerCount"),
            giveawayDuration: cookies.get("giveawayDuration")
        }

        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(event) {

        /**
         * Prize Name
         */
        if (event.target.id === "giveawayPrizeName") {
            if (event.target.value.length > 20) {
                event.target.value = event.target.value.substr(0, 20);
            }
        }

        /**
         * Join Word
         */
        else if (event.target.id === "giveawayJoinWord") {
            if (event.target.value.length > 20) {
                event.target.value = event.target.value.substr(0, 20);
            }
            if (event.target.value.includes(" ")) {
                event.target.value = event.target.value.replaceAll(" ", "");
            }
        }

        /**
         * Winner Count
         */
        else if (event.target.id === "giveawayWinnerCount") {
            if (!isNumeric(event.target.value)) {
                event.target.value = event.target.value.replace(/\D+/g, "");
            }
            if (event.target.value > 5) {
                event.target.value = 5;
            }
            if (event.target.value < 1 && event.target.value !== "") {
                event.target.value = 1;
            }
        }

        /**
         * Duration
         */
        else if (event.target.id === "giveawayDuration") {
            if (!isNumeric(event.target.value)) {
                event.target.value = event.target.value.replace(/\D+/g, "");
            }
            if (event.target.value > 60) {
                event.target.value = 60;
            }
            if (event.target.value < 1 && event.target.value !== "") {
                event.target.value = 1;
            }
        }

        /**
         * None of the above
         */
        else {
            return;
        }

        const cookies = new Cookies();
        cookies.set(event.target.id, event.target.value, {path: "/manage"})
        let e = {}
        e[event.target.id] = event.target.value
        this.setState(e);

    }

    render() {

        return (
            <GiveawayContainer>
                <InnerContainer>
                    <SectionTitle>Giveaway Config</SectionTitle>
                    <Hyperspanner />

                    <ManageForm onSubmit={event => event.preventDefault()} style={{"marginBottom": "30px"}}>

                        <BodySubText>The name of the giveaway prize</BodySubText>
                        <InputField
                            type="text"
                            id="giveawayPrizeName"
                            placeholder="Prize Name"
                            required
                            value={this.state.giveawayPrizeName}
                            onChange={this.handleChange}
                        />

                        <BodySubText>The word to type in the LIVE to join</BodySubText>
                        <InputField
                            type="text"
                            id="giveawayJoinWord"
                            placeholder="Join Word (in Chat)"
                            required
                            value={this.state.giveawayJoinWord}
                            onChange={this.handleChange}
                        />

                        <BodySubText>The number of giveaway winners</BodySubText>
                        <InputField
                            type="text"
                            id="giveawayWinnerCount"
                            placeholder="Number of Winners"
                            required
                            value={this.state.giveawayWinnerCount}
                            onChange={this.handleChange}
                        />

                        <BodySubText>The duration of the giveaway</BodySubText>
                        <InputField
                            type="text"
                            id="giveawayDuration"
                            placeholder="Duration (Minutes)"
                            required
                            value={this.state.giveawayDuration}
                            onChange={this.handleChange}
                        />

                    </ManageForm>

                </InnerContainer>
            </GiveawayContainer>
        );
    }

}

export default ManageGiveaway;
