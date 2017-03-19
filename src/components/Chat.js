import React from 'react'

import SendMessage from '../containers/SendMessage';
import MessagesView from '../containers/MessagesView';

const Chat = () => (
  <div className="chat-container">
    <MessagesView></MessagesView>
    <SendMessage></SendMessage>
  </div>
)

export default Chat
