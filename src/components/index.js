import React from 'react'

import SendMessage from '../containers/SendMessage';
import MessagesView from '../containers/MessagesView';

const App = () => (
  <div className="chat-container">
    <MessagesView></MessagesView>
    <SendMessage></SendMessage>
  </div>
)

export default App
