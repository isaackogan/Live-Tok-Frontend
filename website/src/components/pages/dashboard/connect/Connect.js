import styled from "styled-components";
import {Component} from "react";
import ConnectTitle from "./ConnectTitle";
import ConnectForm from "./ConnectForm";
import Particulate from "../../../particles";

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
  width: 75%;
  display: flex;
  padding-bottom: 150px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.4);
`;

class Connect extends Component {

    render() {
        return (
            <HomeContainer>
                <Particulate color1="#828282" color2="#828282"/>
                <InnerContainer>
                    <ConnectTitle />
                    <ConnectForm />
                </InnerContainer>
            </HomeContainer>
        )
    }

}

export default Connect;
