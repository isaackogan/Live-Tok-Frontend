import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: center;
  margin-top: 5%;
  font-family: Rubik, Arial, sans-serif;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 50px;
  color: black;
`;

const Description = styled.span`
  font-size: 19px;
  width: 40%;
  color: #2f2f2f;
  font-weight: 300;
  text-align: center;
  margin-top: 1%;
`

const HomeTitle = () => {

    return (
        <HomeContainer>
            <Title>TikTok LIVE, Reinvented</Title>
            <Description>
                LiveTok is a TikTok Stream Utility, the first of its kind allowing
                you to automate your stream with giveaways, leaderboards, and more!
            </Description>
        </HomeContainer>
    )

}

export default HomeTitle;
