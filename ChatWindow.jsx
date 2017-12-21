import React from 'react';

class ChatWindow extends React.Component {

    render() {
        return (
            <div class="col-md-6">
                <div class="chat-window">
                    <header>
                        <div class="status">
                            Online
                  <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>
                        </div>
                    </header>
                    <div class="messages">
                        <ul>
                            <li>
                                <div class="message-container">
                                    <div class="icon">
                                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                                    </div>
                                    <div class="content">
                                        <div class="meta">
                                            <span class="name">@bobcat</span>
                                            <span class="timestamp">3 minutes ago</span>
                                        </div>
                                        <div class="message">
                                            Hey, what are you up to?
                      </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="message-container">
                                    <div class="icon">
                                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                                    </div>
                                    <div class="content">
                                        <div class="meta">
                                            <span class="name">@me</span>
                                            <span class="timestamp">1 minutes ago</span>
                                        </div>
                                        <div class="message">
                                            Not much. Any plans for this afternoon?
                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <footer>
                        <input type="text" class="form-control" placeholder="Say..." />
                    </footer>
                </div>
            </div>



        )




    }




} 
export default ChatWindow;