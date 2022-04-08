import styled from "styled-components";
const {Component} = require("react");

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-position: center;
  margin-top: 3px;
`;

const InnerContainer = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.3);
`;

class Home extends Component {

    render() {

        return (
            <HomeContainer>
                <InnerContainer>

                </InnerContainer>
            </HomeContainer>
        )
    }
}

export default Home;
