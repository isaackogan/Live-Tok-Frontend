import styled from "styled-components";
import React from "react";

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
  width: 40%;
  color: #2f2f2f;
  font-weight: 300;
  text-align: center;
  margin-top: 1%;
  line-height: 27px;
  font-family: Rubik, Arial, sans-serif;
`;



function SearchBar() {

    return (
        <FormBar required="required" onSubmit={doThing} method="get">
            <SearchInput
                autoComplete="off"
                type="text"
                id="header-search"
                placeholder="Account Name"
                name="creator_id"
                required
            />
        </FormBar>
    )
}

function doThing() {
    console.log("thing")
}

const ConnectForm = () => {
    return (
        <HomeContainer>
            <SearchBar />
            <Description>
                When you have changed your Bio, click the <SubmitButton>Submit</SubmitButton> button
                and you will be redirected to the management panel.
            </Description>
        </HomeContainer>
    )
}

export default ConnectForm;
