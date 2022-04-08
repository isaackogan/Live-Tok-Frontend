import {Component} from "react";
import {useParams} from "react-router-dom";
import styled from 'styled-components';
import Leaderboard from "./leaderboard/Leaderboard";
import LiveChat from "./chat/LiveChat";
import Giveaway from "./giveaway/Giveaway";
import StreamInfo from "./info/StreamInfo";
import Particulate from "../../particles";

const CreatorPage = () => {
    const params = useParams();
    let t = 0;

    // All is well, live is enabled
    if (t === 0) {
        return <_CreatorPage creator_id={params["creator_id"]}/>
    }

    // Livestream is not online
    else if (t === 1) {
        return <div>Not Online</div>
    }

    // User does not exist
    else {
        return <div>Doesn't Exist</div>
    }

}

const DataContainer = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
`;

const ProfileContainer = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LeaderboardContainer = styled.div`
  width: 100%;
  min-width: 800px;
`;

const OtherContainer = styled.div`
  max-width: 670px;
  margin-left: 2%;
  flex-direction: row;
  display: flex;
`;

const CreatorImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 132px;
  margin-right: 30px;
  filter: drop-shadow(3px 2px 10px rgba(0, 0, 0, 0.3));

`;

const CreatorNameContainer = styled.span`
  display: flex;
  flex-direction: column;
  filter: drop-shadow(3px 3px 10px rgba(0, 0, 0, 0.4));
`;

const CreatorName = styled.span`
  font-family: Rubik, Arial, sans-serif;
  font-size: 35px;
  font-weight: 600;
  color: rgb(42, 41, 41);;
`;

const CreatorNickname = styled.span`
  font-family: Rubik, Arial, sans-serif;
  font-size: 25px;
  font-weight: 600;
  color: rgb(75, 74, 74);;
`;

const GiveawayAndInfo = styled.div`
  width: 380px;
  margin-right: 35px;

`;

const OtherSuperContainer = styled.div`
  width: 670px;
  margin-left: 25px;
  flex-direction: column;
  display: flex;
`;


class _CreatorPage extends Component {

    avatarUrl;
    nickname;

    constructor(props) {
        super(props);
        this.avatarUrl = "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/7cf6f534e453f23bbde838c9148c2039~c5_100x100.jpeg?x-expires=1649383200&x-signature=wDXy%2F2SHgRX%2Bg6gRftGvEpuH%2FZw%3D";
        this.nickname = "Dylan B. Hollis"
    }

    render() {
        return (
            <div>
                <Particulate color1="bfbfbf" color2="bfbfbf"/>
                <ProfileContainer style={{marginTop: "2%"}}>
                    <CreatorImage src={this.avatarUrl}/>
                    <CreatorNameContainer>
                        <CreatorName>{this.props.creator_id}</CreatorName>
                        <CreatorNickname>{this.nickname}</CreatorNickname>
                    </CreatorNameContainer>
                </ProfileContainer>
                <DataContainer style={{marginTop: "2%"}}>
                    <LeaderboardContainer><Leaderboard /></LeaderboardContainer>
                    <OtherSuperContainer>
                        <OtherContainer>
                            <GiveawayAndInfo>
                                <Giveaway />
                                <StreamInfo creator_id={this.props.creator_id}/>
                            </GiveawayAndInfo>
                            <LiveChat creator_id={this.props.creator_id}/>
                        </OtherContainer>
                    </OtherSuperContainer>
                </DataContainer>
            </div>
        )
    }

}

export default CreatorPage;
