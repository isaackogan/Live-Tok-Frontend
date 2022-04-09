import {Component} from "react";
import styled from "styled-components";
import ProgressRing from "./ProgressRing";


const ProfileStatsContainer = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
  color: #4b4b4b;
  margin-right: 70px;

`;

const StatsContainer = styled.div`
  display: flex;
  height: 52px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-margin-start: 31px;
  margin-inline-start: 31px;
  font-family: Rubik, Arial, sans-serif;
`;

const StatName = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 1px;
  color: #85878a;
  white-space: nowrap;
`;

const StatValue = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  margin-top: 5px;
  color: #313030;
`;

class StatsRing extends Component {

    constructor(props) {
        super(props);

        this.state = {
            progress: this.props.doAnimation ? 0 : (this.props.max === 0 ? 0 : this.props.max || 100)
        };
    }

    componentDidMount() {
        const interval = setInterval(() => {

            if (this.state.progress >= (this.props.max === 0 ? 0 : this.props.max || 100)) {
                clearInterval(interval);
                return;
            }

            this.setState({ progress: this.state.progress + 5 });

        }, 100);
    }

    render() {
        return (
            <ProgressRing
                radius={ 45 }
                stroke={ 4 }
                progress={ this.state.progress }
                level={this.props.level}
            />
        );
    }
}

class ProfileStats extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        let percent = (this.props.current_xp / this.props.required_xp) * 100;
        return (
            <ProfileStatsContainer className={"footer__endrow"}>
                <StatsContainer>
                    <StatName>MESSAGES</StatName>
                    <StatValue>{this.props.messages}</StatValue>
                </StatsContainer>
                <StatsContainer>
                    <StatName>EXPERIENCE</StatName>
                    <StatValue>{this.props.experience}</StatValue>
                </StatsContainer>
                <StatsContainer>
                    <StatName>COINS (+BONUS XP)</StatName>
                    <StatValue>{this.props.coins}</StatValue>
                </StatsContainer>
                <StatsContainer>
                    <div style={{width: "50px"}}>
                        <StatsRing doAnimation={this.props.doAnimation} max={percent} level={this.props.level}/>
                    </div>
                </StatsContainer>
            </ProfileStatsContainer>
        )
    }

}



export default ProfileStats;
