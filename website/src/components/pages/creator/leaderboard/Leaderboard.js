import {Component} from "react";
import styled from "styled-components";
import LeaderboardItem from "./profile/LeaderboardItem";
import RingGraphic from "../../home/RingGraphic";

const LeaderboardContainer = styled.div`
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  background-color: #f6f6f6;
  height: 660px;
  
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;


const NoStatsMessage = styled.span`
  width: 100%;
  font-family: Rubik, Arial, sans-serif;
  font-size: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  justify-items: center;
  margin-top: 8%;
  flex-direction: column;
  align-items: center;
`;

const NoStatsDescription = styled.span`
  font-size: 30px;
  font-weight: lighter;
  margin-bottom: 20px;
`;

class Leaderboard extends Component {
    doAnimation;

    constructor(props) {
        super(props);
        this.doAnimation = true;

    }

    getLeaderboardItems() {

        if (this.props.leaderboard_data.length < 1) {
            return (
                <NoStatsMessage>
                    No Leaderboard Data
                    <NoStatsDescription>
                        Come back soon, maybe there will be!
                    </NoStatsDescription>
                    <RingGraphic />
                </NoStatsMessage>
            )

        }


        const items = [];

        for (let i=0; i < this.props.leaderboard_data.length; i++) {
            const item = this.props.leaderboard_data[i];
            items.push(<
                LeaderboardItem
                key={Math.random().toString(36).substring(2)}
                position={i + 1}
                unique_id={item.unique_id}
                avatar_url={item.avatar_url}
                hyperSpanner={i !== this.props.leaderboard_data.length - 1}
                coins={item.coins}
                messages={item.messages}
                required_xp={item.required_xp}
                current_xp={item.current_xp}
                experience={item.experience}
                level={item.level}
                doAnimation={this.doAnimation}
            />)
        }

        this.doAnimation = false;
        return items;

    }


    render() {

        return (
            <LeaderboardContainer>
                {this.getLeaderboardItems()}
            </LeaderboardContainer>
        )
    }

}

export default Leaderboard;
