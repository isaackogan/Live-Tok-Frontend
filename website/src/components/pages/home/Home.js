import styled from "styled-components";
import Particulate from "../../particles";
import HomeTitle from "./HomeTitle";
import StatsRing from "./RingGraphic";
import RingGraphic from "./RingGraphic";
import Features from "./Features";
const {Component} = require("react");

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-position: center;
  margin-top: 3px;
  background-color: transparent;
`;

const InnerContainer = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.3);
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  height: 80px;
`;


class Home extends Component {

    render() {

        return (
            <HomeContainer>
                <Particulate />
                <InnerContainer>
                    <HomeTitle />
                    <RingGraphic />
                    <Features />
                    <Footer />
                </InnerContainer>
            </HomeContainer>
        )
    }
}

export default Home;
