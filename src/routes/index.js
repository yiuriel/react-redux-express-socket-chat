import React from 'react'
import { Route } from 'react-router'
import Chat from '../components/Chat';
import User from '../components/User';

export default <div>
    <Route path="/" component={User}></Route>
    <Route path="chat" component={Chat}></Route>
</div>