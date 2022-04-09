import {Component} from "react";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import ProfileStats from "./ProfileStats";


const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;

const ItemInnerContainer = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

`;

const Hyperspanner = styled.div`
  width: 90%;
  height: 1px;
  background-color: #b3b3b3;
  float: bottom;
`;


class LeaderboardItem extends Component {

    constructor(props) {
        super(props);
    }

    getHyperSpanner() {
        if (this.props.hyperSpanner) {
            return <Hyperspanner />
        }
        return null;
    }

    render() {

        return <ItemContainer>
            <ItemInnerContainer>
                <ProfileInfo avatar_url={this.props.avatar_url} unique_id={this.props.unique_id} position={this.props.position} />
                <ProfileStats
                    coins={this.props.coins}
                    messages={this.props.messages}
                    required_xp={this.props.required_xp}
                    current_xp={this.props.current_xp}
                    experience={this.props.experience}
                    level={this.props.level}
                    doAnimation={this.props.doAnimation}
                />
            </ItemInnerContainer>
            {this.getHyperSpanner()}
        </ItemContainer>
    }

}

export default LeaderboardItem;
