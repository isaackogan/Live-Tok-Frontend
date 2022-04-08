import {Component} from "react";
import styled from "styled-components";
import LeaderboardItem from "./profile/LeaderboardItem";

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


class Leaderboard extends Component {


    constructor(props) {
        super(props);

        this.leaderboardItems = [
            {
                "unique_id": "fallen",
                "coins": 400,
                "messages": 1000,
                "required_xp": 100000,
                "current_xp": 10000,
                "level": 50,
                "avatar_url": "https://cdn.discordapp.com/avatars/322149438413864960/01850747543db04b8f3f0868fbdd60fc.png"
            },
            {
                "unique_id": "Mariocart",
                "coins": 400,
                "messages": 1000,
                "required_xp": 100000,
                "current_xp": 40000,
                "level": 32,
                "avatar_url": "https://cdn.discordapp.com/avatars/305377547426988034/c9bae062046c07ee2ef5d3257404d66b.png"
            },
            {
                "unique_id": "Bananorama",
                "coins": 400,
                "messages": 1000,
                "required_xp": 100000,
                "current_xp": 30000,
                "level": 5,
                "avatar_url": "https://cdn.discordapp.com/avatars/341722005013397505/d32835448bacd21047f2ce84441d45d5.png"
            },
            {
                "unique_id": "Bananorama",
                "coins": 400,
                "messages": 1000,
                "required_xp": 100000,
                "current_xp": 30000,
                "level": 5,
                "avatar_url": "https://cdn.discordapp.com/avatars/341722005013397505/d32835448bacd21047f2ce84441d45d5.png"
            },

            {
                "unique_id": "Bananorama",
                "coins": 400,
                "messages": 1000,
                "required_xp": 100000,
                "current_xp": 30000,
                "level": 5,
                "avatar_url": "https://cdn.discordapp.com/avatars/341722005013397505/d32835448bacd21047f2ce84441d45d5.png"
            },
            {
                "unique_id": "Bananorama",
                "coins": 400,
                "messages": 1000,
                "required_xp": 100000,
                "current_xp": 30000,
                "level": 5,
                "avatar_url": "https://cdn.discordapp.com/avatars/341722005013397505/d32835448bacd21047f2ce84441d45d5.png"
            },

            {
                "unique_id": "Bananorama",
                "coins": 400,
                "messages": 1000,
                "required_xp": 100000,
                "current_xp": 30000,
                "level": 5,
                "avatar_url": "https://cdn.discordapp.com/avatars/341722005013397505/d32835448bacd21047f2ce84441d45d5.png"
            },
            {
                "unique_id": "Bananorama",
                "coins": 400,
                "messages": 1000,
                "required_xp": 100000,
                "current_xp": 30000,
                "level": 5,
                "avatar_url": "https://cdn.discordapp.com/avatars/341722005013397505/d32835448bacd21047f2ce84441d45d5.png"
            },

            {
                "unique_id": "Bananorama",
                "coins": 400,
                "messages": 1000,
                "required_xp": 100000,
                "current_xp": 30000,
                "level": 5,
                "avatar_url": "https://cdn.discordapp.com/avatars/341722005013397505/d32835448bacd21047f2ce84441d45d5.png"
            },
            {
                "unique_id": "Bananorama",
                "coins": 400,
                "messages": 1000,
                "required_xp": 100000,
                "current_xp": 30000,
                "level": 5,
                "avatar_url": "https://cdn.discordapp.com/avatars/341722005013397505/d32835448bacd21047f2ce84441d45d5.png"
            },

        ];

    }

    getLeaderboardItems() {
        const items = [];

        for (let i=0; i < this.leaderboardItems.length; i++) {
            const item = this.leaderboardItems[i];


            items.push(<
                LeaderboardItem
                key={i + "lbItem"}
                position={i + 1}
                unique_id={item.unique_id}
                avatar_url={item.avatar_url}
                hyperSpanner={i !== this.leaderboardItems.length - 1}
                coins={item.coins}
                messages={item.messages}
                required_xp={item.required_xp}
                current_xp={item.current_xp}
                level={item.level}

            />)
        }

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
