import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 10%;
  font-family: Rubik, sans-serif;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 50px;
  color: rgb(0, 0, 0);
`;

const Description = styled.span`
  font-size: 19px;
  width: 45%;
  color: #2f2f2f;
  font-weight: 300;
  text-align: center;
  line-height: 27px;
  margin-top: 5%;
`;



const Code = styled.code`
  background-color: black;
  border-radius: 5px;
  color: white;
  margin-left: 5px;
  margin-right: 5px;
  padding-left: 2px;
  padding-right: 2px;
  outline: 4px solid black;
`

const ConnectTitle = () => {
    return (
        <HomeContainer>
            <Title>Choose Your Account</Title>
            <Description>
                Select your account name. Place the code <Code>123 222 333</Code> into your
                account's Bio. You can remove it after we're done here.
            </Description>
        </HomeContainer>
    )
}

export default ConnectTitle;
