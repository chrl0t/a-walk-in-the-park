import React, { Component, Fragment } from "react";
import Talk from "talkjs";
import firebase from "firebase/app";
import { AuthContext } from "../Authentication";

class Messages extends Component {
  static contextType = AuthContext;
  state = {
    me: ""
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state, "<<<state changed!");
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
    const user = this.context.currentUser;

    const userInfo = {
      id: user.id,
      name: user.name,
      role: "Member",
      photoUrl:
        "https://www.pinclipart.com/picdir/middle/8-82428_profile-clipart-generic-user-gender-neutral-head-icon.png"
    };

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
