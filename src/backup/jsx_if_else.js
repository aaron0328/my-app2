import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
      <h2>
        You have {unreadMessages.length} unread message.
      </h2>
      }
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
      </div>
  );
}

const message = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages ={message} isLoggedIn={false} />,
  document.getElementById('root')
);