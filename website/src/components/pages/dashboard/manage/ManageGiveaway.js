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

const InputField = styled.input`
  
`;

class ManageGiveaway extends Component {
    authorization;

    constructor(props) {
        super(props);
        const cookies = new Cookies();
        this.authorization = cookies.get("authorization");
        this.state = { loading: false, started: this.props.tracking}
    }


    render() {

        // Giveaways (# of Winners, Prize Name, Countdown, Join Word, Stop, Start, Re-Roll)

        return (
            <GiveawayContainer>
                <InnerContainer>
                    <SectionTitle>Giveaway Config</SectionTitle>
                    <Hyperspanner />

                    <form onSubmit={event => event.preventDefault()} style={{"marginBottom": "30px"}}>

                        <InputField
                            type="number"
                            placeholder="Number of Winners"
                            name="creator_id"
                            required
                            onChange={this.handleChange}
                        />

                        <InputField
                            type="text"
                            placeholder="Prize Name"
                            name="creator_id"
                            required
                            onChange={this.handleChange}
                        />

                        <InputField
                            type="number"
                            placeholder="Number of Winners"
                            name="creator_id"
                            required
                            onChange={this.handleChange}
                        />

                        <ControlButton>
                            Save Settings
                            <BodyText>Save Configuration</BodyText>
                        </ControlButton>
                    </form>

                </InnerContainer>
            </GiveawayContainer>
        );
    }

}

export default ManageGiveaway;
