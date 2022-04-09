import styled from "styled-components";
import {Component} from "react";
import {io} from "socket.io-client";
import Config from "../../../../index";
import ChatComment from "../../creator/chat/ChatComment";
import Cookies from "universal-cookie";

const ChatContainer = styled.div`
  width: 23%;
  height: 520px;
  background-color: #f6f6f6;
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  font-family: Rubik, Arial, sans-serif;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`;



const ChatInnerContainer = styled.div`
  margin-top: 20px;
  height: 553px;
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
  padding: 8px;
  cursor: pointer;
  width: 120px;
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

const DownloadChatLogs = styled.button`
  font-family: Rubik, sans-serif;
  padding: 8px;
  cursor: pointer;
  width: 120px;
  font-size: 15px;
  background-color: rgb(0, 0, 0);
  color: rgba(255, 255, 255, 1.0);
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  text-decoration: none;
`;

const ExternalSVG = styled.img`
  width: 15px;
  height: 15px;
  color: white;
  margin-left: 8px;
`;

const ChatButtons = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
`;

class LiveChat extends Component {
    messages = [];
    authorization;

    constructor(props) {
        super(props);
        this.state = { messages: [] }
        const cookies = new Cookies();
        this.authorization = cookies.get("authorization");

        let connection = new io(Config.tiktok_ws_url);
        connection.emit("setUniqueId", this.props.creator_id)
        connection.on('chat', this.handleData);
        connection.connect();

        this.downloadLogs = this.downloadLogs.bind(this);

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
                    key={Math.random().toString(36).substring(2)}
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

    downloadLogs(event) {
        event.preventDefault();

        if (this.authorization) {
            /**
             * Download via StackOverflow
             * Source: https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server
             */
            fetch(Config.backend_api_url + `creator/dashboard/logs?authorization=${this.authorization}`)
                .then(res => res.json())
                .then((response) => {

                    let element = document.createElement('a');
                    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(response.payload.join("\n")));
                    element.setAttribute('download', "chatlog.txt");

                    element.style.display = 'none';
                    document.body.appendChild(element);

                     element.click();

                    document.body.removeChild(element);

                });
        }


    }

    render() {

        return (
            <ChatContainer>
                <ChatInnerContainer>
                    <div style={{marginTop: "20px"}}>{this.getChats()}</div>
                    <div style={{float: "left", clear: "both"}} ref={(el) => this.messagesEnd = el}/>
                </ChatInnerContainer>
                <ChatButtons>
                    <WatchOnTikTok style={{marginRight: "10px"}} target="_blank" href={`https://tiktok.com/@${this.props.creator_id}/live`}>
                        Open Stream <ExternalSVG src="/icons/external.svg"/>
                    </WatchOnTikTok>
                    <form onSubmit={this.downloadLogs}>
                        <DownloadChatLogs type="submit">
                            Chat Logs <ExternalSVG src="/icons/download.svg"/>
                        </DownloadChatLogs>
                    </form>
                </ChatButtons>
            </ChatContainer>
        )
    }

}

export default LiveChat;
