import {Component} from "react";
import styled from "styled-components";

const ChatMessage = styled.span`
  font-weight: 300;
  color: rgb(0, 0, 0);
`;

const UserName = styled.span`
  color: rgb(0, 0, 0);
  font-weight: 400;
`

const ProfilePicture = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  margin-right: 10px;
`;

const CommentContainer = styled.div`
  font-family: Rubik, Arial, sans-serif;
  font-size: 16px;
  display: flex;
  padding-bottom: 10px;
`;

class ChatComment extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CommentContainer>
                <ProfilePicture src={this.props.avatarUrl}/>
                <div>
                    <UserName>{this.props.uniqueId} </UserName>
                    <ChatMessage>{this.props.comment}</ChatMessage>
                </div>

            </CommentContainer>
        );
    }
}

export default ChatComment;
