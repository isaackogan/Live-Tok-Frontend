import {Component} from "react";
import styled from "styled-components";


const DashboardTitleContainer = styled.span`
  font-family: Rubik, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  width: 80%;
`;


const DashboardTitleName = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

const DashboardUserName = styled.span`
  font-size: 30px;
  font-weight: lighter;
`;

class DashboardTitle extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DashboardTitleContainer>
                <DashboardTitleName>Creator Dashboard</DashboardTitleName>
                <DashboardUserName>Logged in as @{this.props.creator_id}</DashboardUserName>
            </DashboardTitleContainer>
        )
    }
}

export default DashboardTitle;
