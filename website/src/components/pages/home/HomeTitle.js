import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: center;
  margin-top: 5%;
  font-family: Rubik, Arial, sans-serif;
  flex-direction: column;
`;

const Title = styled.span`
    
`;

const Description = styled.span`

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
