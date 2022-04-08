import styled from "styled-components";
import {Component} from "react";
import Cookies from 'universal-cookie';
import Connect from "./connect/Connect";
import Manage from "./manage/Manage";

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  margin-top: 3px;
`;

class Dashboard extends Component {

    authenticated;
    authorization;

    constructor(props) {
        super(props);
        const cookies = new Cookies();

        // cookies.set('Authorization', 'Pacman', { path: '/manage' });
        // TODO logic for authenticating
        this.authorization = cookies.get("Authorization");
        this.authenticated = this.authorization === "Pacman"

    }

    render() {
        return (
            <HomeContainer className="particle">
                {
                    this.authenticated ? <Manage /> : <Connect />
                }
            </HomeContainer>
        )

    }
}

export default Dashboard;
