import {Component} from "react";
import {useParams} from "react-router-dom";
import styled from 'styled-components';
import Leaderboard from "./leaderboard/Leaderboard";
import LiveChat from "./chat/LiveChat";
import Giveaway from "./giveaway/Giveaway";
import StreamInfo from "./info/StreamInfo";
import Particulate from "../../particles";
import Config from "../../../index";

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

const LoadRing = styled.div`
  display: inline-block;
  width: 122px;
  height: 122px;
  margin: auto;

  &::before {
    content: " ";
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 12px solid #323232;
    border-color: #323232 transparent #323232 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  
  margin-bottom: 2%;
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;


const StatusMessage = styled.span`
  font-size: 50px;
`;

const StatusSubMessage = styled.span`
  font-size: 27px;
  margin-top: 5px;
  font-weight: lighter;
`

const StatusContainer = styled.div`
  font-family: Rubik, Arial, sans-serif;
  margin-top: 10%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

/**
 * Request Info from SO
 * Citation: https://stackoverflow.com/questions/44911012/rendering-react-component-after-api-response
 */
class CreatorPageSlave extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_info: null
        }

    }

    componentDidMount(){
        fetch(Config.backend_api_url + `tiktok/user/page-data?username=${this.props.creator_id}`)
            .then(res => res.json())
            .then((response) => {
                this.setState({
                    user_info: response
                });
            })
    }

    render() {
        let response = this.state.user_info

        if (!response) {
            return (
                <StatusContainer>
                    <Particulate color1="bfbfbf" color2="bfbfbf"/>
                    <LoadRing />
                    <StatusMessage>Loading Data...</StatusMessage>
                    <StatusSubMessage>Please be patient, this may take a moment.</StatusSubMessage>
                </StatusContainer>
            )
        }

        // User DNE
        if (response.status === 404) {
            return (
                <StatusContainer>
                    <Particulate color1="bfbfbf" color2="bfbfbf"/>
                    <LoadRing style={{"visibility": "hidden"}}/>
                    <StatusMessage>Live Not Found</StatusMessage>
                    <StatusSubMessage>Either @{this.props.creator_id} doesn't exist, or they're not live.</StatusSubMessage>
                </StatusContainer>
            )
        }

        // Bad payload
        if (response.status !== 200) {
            return (
                <StatusContainer>
                    <Particulate color1="bfbfbf" color2="bfbfbf"/>
                    <LoadRing style={{"visibility": "hidden"}}/>
                    <StatusMessage>Failed to Load Data</StatusMessage>
                    <StatusSubMessage>Failed to load data for @{this.props.creator_id}. This is our fault. Come back soon!</StatusSubMessage>
                </StatusContainer>
            )
        }

        // They're live!
        if (response.payload["roomId"]) {
            return <CreatorPage user_info={response.payload} creator_id={this.props.creator_id}/>
        }

    }
}

const CreatorPageMaster = () => {
    const params = useParams();
    return <CreatorPageSlave creator_id={params["creator_id"]} />
}


class CreatorPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            user_info: this.props.user_info
        }

    }

    componentDidMount() {
        this.interval = setInterval(() => {
            fetch(Config.backend_api_url + `tiktok/user/page-data?username=${this.props.creator_id}`)
                .then(res => res.json())
                .then((response) => {
                    this.setState({
                        user_info: response.payload
                    });
                })
        }, 10000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <Particulate color1="bfbfbf" color2="bfbfbf"/>
                <ProfileContainer style={{marginTop: "2%"}}>
                    <CreatorImage src={this.state.user_info["avatarLarger"]}/>
                    <CreatorNameContainer>
                        <CreatorName>@{this.props.creator_id}</CreatorName>
                        <CreatorNickname>{this.state.user_info["nickname"]}</CreatorNickname>
                    </CreatorNameContainer>
                </ProfileContainer>
                <DataContainer style={{marginTop: "2%"}}>
                    <LeaderboardContainer><Leaderboard leaderboard_data={this.state.user_info["leaderboards"]} /></LeaderboardContainer>
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


export default CreatorPageMaster;
