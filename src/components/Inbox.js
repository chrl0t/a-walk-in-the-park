import React from "react";
import Talk from "talkjs";
import { AuthContext } from "../Authentication";
import { dummyUsers } from "./DummyUsers";
import { fetchUsers } from "../utils/fetchUsers";

class Inbox extends React.Component {
  static contextType = AuthContext;

  state = {
    me: "",
    users: []
  };

  componentDidMount() {
    const user = this.context.currentUser;

    const userInfo = {
      id: user.id,
      name: user.name,
      role: "Member",
      photoUrl:
        "https://static.wikia.nocookie.net/roalddahl/images/b/b9/Illmannered.jpg/revision/latest/top-crop/width/360/height/450?cb=20140911174536"
    };
    fetchUsers().then((res) => {
      const user = res.find((user) => user.id === this.props.username);
      Talk.ready
        .then(() => {
          /* Create the two users that will participate in the conversation */
          const me = new Talk.User(userInfo);
          const other = new Talk.User(user);


        /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
        // if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: "tP8HPC7p",
            me: me
          });
          // }

          /* Get a conversation ID or create one */
          const conversationId = Talk.oneOnOneId(me, other);
          const conversation = window.talkSession.getOrCreateConversation(
            conversationId
          );

          /* Set participants of the conversations */
          conversation.setParticipant(me);
          conversation.setParticipant(other);

          /* Create and mount chatbox in container */
          this.chatbox = window.talkSession.createChatbox(conversation);
          this.chatbox.mount(this.container);
        })
        .catch((e) => console.error(e));
      this.setState({ users: res, me: userInfo });
    });
  }

  // handleClick(userId) {
  //   /* Retrieve the two users that will participate in the conversation */
  //   const currentUser = this.state.me;
  //   const user = this.state.users.find((user) => user.id === userId);

  //   /* Session initialization code */
  //   Talk.ready
  //     .then(() => {
  //       /* Create the two users that will participate in the conversation */
  //       const me = new Talk.User(currentUser);
  //       const other = new Talk.User(user);

  //       /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
  //       // if (!window.talkSession) {
  //       window.talkSession = new Talk.Session({
  //         appId: "tP8HPC7p",
  //         me: me
  //       });
  //       // }

  //       /* Get a conversation ID or create one */
  //       const conversationId = Talk.oneOnOneId(me, other);
  //       const conversation = window.talkSession.getOrCreateConversation(
  //         conversationId
  //       );

  //       /* Set participants of the conversations */
  //       conversation.setParticipant(me);
  //       conversation.setParticipant(other);

  //       /* Create and mount chatbox in container */
  //       this.chatbox = window.talkSession.createChatbox(conversation);
  //       this.chatbox.mount(this.container);
  //     })
  //     .catch((e) => console.error(e));
  // }

  render() {
    const currentUser = this.state;
  
    return (
      <div className='users'>
        <div className='users-container'>
          {/* <ul>
            {this.state.users.map((user) => (
              <li key={user.id} className='user'>
                <picture className='user-picture'>
                  <img src={user.photoUrl} alt={`${user.name}`} />
                </picture>
                <div className='user-info-container'>
                  <div className='user-info'>
                    <h4>{user.name}</h4>
                    <p>{user.info}</p>
                  </div>
                  <div className='user-action'>
                    <button onClick={(userId) => this.handleClick(user.id)}>
                      Message
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul> */}
          <div className='chatbox-container' ref={(c) => (this.container = c)}>
            <div id='talkjs-container' style={{ height: "500px" }}>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Inbox;
