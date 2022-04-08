import styled from "styled-components";

const HomeContainer = styled.div`
  margin-top: 4%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Rubik, sans-serif;
  margin-bottom: 5%;
`;


const InfoRow = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CellItem = styled.div`
  width: 400px;
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  margin-left: 50px;
  justify-content: center;
  align-items: center;
`;

const CellItemLabel = styled.span`
  font-size: 25px;
  color: rgb(0, 0, 0);
`;

const CellItemDesc = styled.span`
  padding-top: 6%;
  font-size: 18px;
  font-weight: 300;
`;

const CellIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.span`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgb(16, 16, 16);
`;

const Hyperspanner = styled.div`
  width: 20%;
  height: 1px;
  background-color: #bdbdbd;
  float: bottom;
  margin-bottom: 70px;

`;


const Features = () => {
    return (
        <HomeContainer>
            <SectionTitle>Our Features</SectionTitle>
            <Hyperspanner/>
            <InfoRow>
                <CellItem>
                    <CellIcon src="/icons/dashboard.svg"/>
                    <CellItemLabel>Dashboard</CellItemLabel>
                    <CellItemDesc>LiveTok provides a virtual dashboard for users & streamers to view and manage their TikTok streams.</CellItemDesc>
                </CellItem>
                <CellItem>
                    <CellIcon src="/icons/clouds.svg"/>
                    <CellItemLabel>Cloud Hosted</CellItemLabel>
                    <CellItemDesc>100% of LiveTok is in the cloud. No downloads. We host everything, and you just have to enjoy.</CellItemDesc>
                </CellItem>
                <CellItem>
                    <CellIcon src="/icons/growth.svg"/>
                    <CellItemLabel>Community Growth</CellItemLabel>
                    <CellItemDesc>Interact with your audience like never before and grow your engagement &   community.</CellItemDesc>
                </CellItem>
            </InfoRow>
        </HomeContainer>
    )
}

export default Features;
