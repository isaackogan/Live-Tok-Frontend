import {Component} from "react";
import styled from "styled-components";


const RankCircle = styled.div`
  width: 40px;
  height: 40px;
  justify-content: center;
  justify-items: center;
  display: flex;
  text-align: center;
  line-height: 15px;
  align-items: center;
  font-size: 16px;
  font-family: Arial, sans-serif;
  color: white;
  font-weight: bold;
  background-color: rgb(71, 71, 71);
  border-radius: 100%;
  margin-right: 15px;
`;

const ProfileCircle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: 15px;
`;

const ProfileInfoContainer = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
  color: #4b4b4b;
  margin-left: 50px;
`;

const ProfileName = styled.span`
  font-family: Rubik, Arial, sans-serif;
  font-weight: 600;
`;

class ProfileInfo extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ProfileInfoContainer>
                <RankCircle>{this.props.position}</RankCircle>
                <ProfileCircle src={this.props.avatar_url}/>
                <ProfileName>{this.props.unique_id}</ProfileName>
            </ProfileInfoContainer>
        )
    }

}

export default ProfileInfo;
