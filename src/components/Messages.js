import React, { Component, Fragment } from "react";
import Talk from "talkjs";
import firebase from "firebase/app";
import { AuthContext } from "../Authentication";

class Messages extends Component {
  static contextType = AuthContext;
  state = {
    id: "grandpajoe",
    name: "Joe Bucket",
    role: "Member",
    photoUrl:
      "https://static.wikia.nocookie.net/roalddahl/images/b/b9/Illmannered.jpg/revision/latest/top-crop/width/360/height/450?cb=20140911174536"
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state, "<<<state changed!")
    Talk.ready
      .then(() => {
        const me = new Talk.User(this.state);

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: "tP8HPC7p",
            me: me
          });
        }

        this.inbox = window.talkSession.createInbox();
        this.inbox.mount(this.container);
      })
      .catch((e) => console.error(e));
  }
  
  componentDidMount() {
    const user = this.context.currentUser

    const userInfo = {
      id: user.id,
      name: user.name,
      role: "Member",
      photoUrl: "https://static.wikia.nocookie.net/roalddahl/images/b/b9/Illmannered.jpg/revision/latest/top-crop/width/360/height/450?cb=20140911174536"
    }
   
    this.setState(userInfo);
  }

  render() {
    console.log(this.context);
    return (
      <Fragment>
        <div
          style={{ height: "500px" }}
          className='inbox-container'
          ref={(c) => (this.container = c)}
        >
          Loading...
        </div>
      </Fragment>
    );
  }
}

export default Messages;
