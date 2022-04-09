import styled from "styled-components";
import {Component} from "react";
import Cookies from 'universal-cookie';
import Connect from "./connect/Connect";
import Manage from "./manage/Manage";
import Config from "../../../index";
import Particulate from "../../particles";

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

class Dashboard extends Component {
    authorization;

    constructor(props) {
        super(props);
        const cookies = new Cookies();
        this.authorization = cookies.get("authorization")

        this.state = {
            dashboard_data: null
        }

    }

    componentDidMount(){

        if (this.authorization) {
            fetch(Config.backend_api_url + `creator/dashboard?authorization=${this.authorization}`)
                .then(res => res.json())
                .then((response) => {
                    this.setState({
                        dashboard_data: response
                    });
                });
        }

    }

    render() {

        // No auth token
        if (!this.authorization) {
            return <Connect />
        }

        // Loading data
        let dashboard_data = this.state.dashboard_data;
        if (!dashboard_data) {
            return (
                <StatusContainer>
                    <Particulate color1="bfbfbf" color2="bfbfbf"/>
                    <LoadRing />
                    <StatusMessage>Loading Data...</StatusMessage>
                    <StatusSubMessage>Please be patient, this may take a moment.</StatusSubMessage>
                </StatusContainer>
            )
        }

        // Not authenticated (bad token)
        if (dashboard_data.status !== 200) {
            return <Connect />
        }

        // Authenticated
        return <Manage dashboard_data={dashboard_data["payload"]} />

    }
}



export default Dashboard;
