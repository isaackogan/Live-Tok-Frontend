import styled from "styled-components";
import React, {Component} from "react";
import Config from "../../../../index";
import Cookies from "universal-cookie";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 3%;
  font-family: Rubik, sans-serif;
  flex-direction: column;
`;

const SearchInput = styled.input`
  height: 80px;
  width: 300px;
  border-radius: 90px;
  border: none;
  padding-left: 30px;
  padding-right: 30px;
  background: none;
  outline: none !important;
  font-family: Arial, sans-serif;
  text-align: center;
  font-size: 20px;
  background: #e0e1e2;
  
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #e0e1e2 inset !important;
    -webkit-text-fill-color: black !important;
    font-size: 18px !important;
  }

  :-webkit-autofill::first-line {
    font-size: 24px;
  }
  
  

  
`;

const FormBar = styled.form`
  border-radius: 25px;

  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex-direction: column;
  
  :hover {
    outline: none !important;
  }
  
  

`;

const SubmitButton = styled.button`
  background-color: black;
  border-radius: 9px;
  color: white;
  padding: 3px 8px;
  margin-top: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
  font-family: Rubik, Arial, sans-serif;
  font-size: 18px;
  
  :active {
    opacity: 0.8;
  }
`;

const Description = styled.span`
  font-size: 19px;
  width: 60%;
  color: #2f2f2f;
  font-weight: 300;
  text-align: center;
  margin-top: 1%;
  line-height: 27px;
  font-family: Rubik, Arial, sans-serif;
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
  margin-top: 5%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;


/**
 *
 * Used External Research
 * Citation: https://reactjs.org/docs/forms.html
 *
 */
class ConnectForm extends React.Component {
    submitted = false;

    constructor(props) {
        super(props);
        this.state = {value: '', auth_response: null, loading_auth_response: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {

        event.preventDefault();

        if (this.submitted) {
            return;
        }

        this.submitted = true;
        this.setState({loading_auth_response: true});

        fetch(Config.backend_api_url + `creator/auth/check?client_id=${this.props.client_id}&username=${this.state.value}`, {method: "POST"})
            .then(res => res.json())
            .then((response) => {
                this.setState({auth_response: response, loading_auth_response: false});
            })

    }

    render() {

        if (this.submitted) {

            // Loading
            if (this.state.loading_auth_response) {
                return (
                    <StatusContainer>
                        <LoadRing />
                        <StatusSubMessage>Checking your profile... Please wait a moment!</StatusSubMessage>
                    </StatusContainer>
                )
            }

            // Loaded
            let status = this.state.auth_response.status;
            if (status !== 200) {

                setTimeout(() => {
                    window.location.replace("/")
                }, 3000);

                if (status === 401) {
                    return (
                        <StatusContainer>
                            <StatusMessage>Failed Authentication</StatusMessage>
                            <StatusSubMessage>Your token was expired. You will be re-directed to the main page momentarily.</StatusSubMessage>
                        </StatusContainer>
                    )
                }

                else if (status === 400) {
                    return (
                        <StatusContainer>
                            <StatusMessage>Failed Authentication</StatusMessage>
                            <StatusSubMessage>Token not found in bio. You will be re-directed to the main page momentarily.</StatusSubMessage>
                        </StatusContainer>
                    )
                }

                return (
                    <StatusContainer>
                        <StatusMessage>Failed Authentication</StatusMessage>
                        <StatusSubMessage>There was an internal error. You will be re-directed to the main page momentarily.</StatusSubMessage>
                    </StatusContainer>
                )

            }

            const cookies = new Cookies();
            cookies.set("authorization", this.state.auth_response.payload, {path: "/manage", expires: new Date(Date.now() + (86400 * 1000))})
            window.location.reload();

        }

        return (
            <HomeContainer>

                <FormBar onSubmit={this.handleSubmit}>
                    <SearchInput
                        autoComplete="off"
                        type="text"
                        id="header-search"
                        placeholder="Account Name"
                        name="creator_id"
                        required
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <Description>
                        When you have changed your Bio, click the <SubmitButton type="submit">Submit</SubmitButton> button
                        and you will be redirected to the management panel.
                    </Description>
                </FormBar>

            </HomeContainer>

        );
    }
}

export default ConnectForm;
