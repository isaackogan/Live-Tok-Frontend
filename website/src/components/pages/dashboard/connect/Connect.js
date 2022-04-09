import styled from "styled-components";
import {Component} from "react";
import ConnectTitle from "./ConnectTitle";
import ConnectForm from "./ConnectForm";
import Particulate from "../../../particles";
import Config from "../../../../index";
import Cookies from "universal-cookie";

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

const InnerContainer = styled.div`
  width: 75%;
  display: flex;
  padding-bottom: 150px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.4);
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

class Connect extends Component {
    client_id;

    constructor(props) {
        super(props);
        this.state = {
            auth_code: null
        }

        const cookies = new Cookies();

        // Generate client ID
        let client_id = cookies.get("client_id");

        if (!client_id) {
            client_id = Math.random().toString(36).substring(2)
            cookies.set("client_id", client_id, {path: "/manage", expires: new Date(Date.now() + (3600 * 1000))})
        }

        this.client_id = client_id

    }

    componentDidMount(){

        fetch(Config.backend_api_url + `creator/auth/generate?client_id=${this.client_id}`)
            .then(res => res.json())
            .then((response) => {
                this.setState({
                    auth_code: response["payload"]
                });
            });

    }

    render() {

        if (!this.state.auth_code) {
            return (
                <StatusContainer>
                    <Particulate />
                    <LoadRing />
                    <StatusMessage>Loading Data...</StatusMessage>
                    <StatusSubMessage>Please be patient, this may take a moment.</StatusSubMessage>
                </StatusContainer>
            )
        }

        return (
            <HomeContainer>
                <Particulate color1="#828282" color2="#828282"/>
                <InnerContainer>
                    <ConnectTitle auth_code={this.state.auth_code}/>
                    <ConnectForm client_id={this.client_id} />
                </InnerContainer>
            </HomeContainer>
        )
    }

}

export default Connect;
