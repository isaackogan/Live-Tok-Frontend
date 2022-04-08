import styled from "styled-components";
import "../css/index.css";

const HeaderBar = styled.div`
  height: 70px;
  background-color: white;
  --header-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--header-shadow);
  
  display: flex;
  flex-basis: fit-content;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 100px;
  
`;

const Logo2 = styled.img`
  padding-top: 10px;
  width: 70px;
  padding-bottom: 4px;
`;

const Spanner = styled.span`
  width: 1px;
  height: 28px;
  margin-right: -16px;
  display: inline-block;
  background: rgba(22, 24, 35, 0.12);
`;


const HeaderLogos = styled.a`
  width: 170px;
  cursor: pointer;
  margin-left: 70px;
`;

const HeaderButtons = styled.div`
  width: 360px;
  
`;

const StreamLoginButton = styled.a`
  font-family: Rubik, Arial, sans-serif;
  padding: 15px;
  cursor: pointer;
  font-size: 15px;
  background-color: rgb(24, 24, 24);
  color: rgba(255, 255, 255, 1.0);
  border-radius: 4px;
  text-decoration: none;
  
`;

const InfoButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-family: Rubik, Arial, sans-serif;
  color: black;
  font-size: 15px;
  min-width: 80px;
  min-height: 20px;
  display: inline-block;
  margin-right: 25px;
`;

const SearchInput = styled.input`
  height: 3.5em;
  border-radius: 25px;
  border: none;
  padding-left: 30px;
  padding-right: 30px;
  background: none;
  outline: none;
  width: 190px;
  font-size: 15px;
  
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #e0e1e2 inset !important;
    -webkit-text-fill-color: black !important;
  }
  
`;

const FormBar = styled.form`
  border-radius: 25px;
  width: 20em;
  background: #e0e1e2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  
  :hover {
    outline: none !important;
  }
`;

function SearchMenu() {

    return (
        <FormBar action="/search" method="get">
            <SearchInput type="text" placeholder="Search TikTok Streams" name="creator_id" required/>
        </FormBar>
    )
}

function Header() {

    return (
        <HeaderBar>

            <HeaderLogos href="/">
                <Logo src="/logos/logo.png"/>
                <Logo2 src="/logos/logo2.png"/>
            </HeaderLogos>

            <SearchMenu />

            <HeaderButtons>
                <InfoButton href="https://yrhacks.ca" target="_blank">#YRHacks2022</InfoButton>
                <StreamLoginButton href="/manage">Manage Stream</StreamLoginButton>
            </HeaderButtons>

        </HeaderBar>

    );
}

export default Header;
