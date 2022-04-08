import {Component} from "react";
import styled from "styled-components";
import {io} from "socket.io-client";
import ChatComment from "./ChatComment";

const ChatContainer = styled.div`
  width: 450px;
  height: 660px;
  background-color: #f6f6f6;
  display: flex;
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  flex-direction: column;
  overflow-y: hidden;
  align-items: center;
  justify-content: space-between;

`;

const ChatInnerContainer = styled.div`
  margin-top: 20px;
  height: 510px;
  width: 90%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
  
`;

const WatchOnTikTok = styled.a`
  font-family: Rubik, sans-serif;
  padding: 10px;
  cursor: pointer;
  width: 180px;
  font-size: 15px;
  background-color: rgb(0, 0, 0);
  color: rgba(255, 255, 255, 1.0);
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;


`

const ExternalSVG = styled.img`
  width: 15px;
  height: 15px;
  color: white;
  margin-left: 8px;
`;

class LiveChat extends Component {
    messages = [];

    constructor(props) {
        super(props);
        this.state = { messages: [] }


        let connection = new io("https://tiktok-chat-reader.zerody.one/");
        connection.emit("setUniqueId", this.props.creator_id)
        connection.on('chat', this.handleData);
        connection.connect();

    }


    handleData = (playerList) => {
        let copy = this.state.messages;
        copy.push(playerList);
        this.setState({messages: copy})
    }


    getChats() {
        const items = [];

        for (let item of this.state.messages) {
            items.push(
                <ChatComment
                    comment={item.comment}
                    uniqueId={item.uniqueId}
                    avatarUrl={item["profilePictureUrl"]}
            />)
        }

        return items;

    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" , block: 'nearest', inline: 'start'});
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate(a, b, c) {
        this.scrollToBottom();
    }
    render() {

        return (
            <ChatContainer>

                <ChatInnerContainer>
                    <div style={{marginTop: "20px"}}>{this.getChats()}</div>
                    <div style={{float: "left", clear: "both"}} ref={(el) => this.messagesEnd = el}/>
                </ChatInnerContainer>
                <WatchOnTikTok target="_blank" href={`https://tiktok.com/@${this.props.creator_id}/live`}>
                    Watch on TikTok <ExternalSVG src="/icons/external.svg"/>
                </WatchOnTikTok>
            </ChatContainer>
        )
    }

}

export default LiveChat;
