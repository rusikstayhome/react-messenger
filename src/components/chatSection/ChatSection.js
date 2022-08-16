import { Component } from "react";
import { Fragment } from "react";

import ChatForm from "../chatForm/ChatForm";

import './ChatSection.css';

class ChatSection extends Component {
    render() {
        return (
            <>
                <header>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-1qWjyRhUeCXxcrSfrNvMtWbOEz7p0_Q0lEkSsuIRMNnFHaVHnbzAB14E3NfMZWasCZk&usqp=CAU" alt="profile icon" />
                    <h1>Nihara</h1>
                </header>
                <main>
                    <div className="chat-response">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-1qWjyRhUeCXxcrSfrNvMtWbOEz7p0_Q0lEkSsuIRMNnFHaVHnbzAB14E3NfMZWasCZk&usqp=CAU" alt="profile icon" />
                        <p>Quickly come to the meeting room 1B, we have a big server issue</p>
                        <div className="chat-response-data">4/27/17, 16:37</div>
                    </div>

                    <div className="chat-message">
                        <p>I'm having breakfast right now, can't you wait for 10 minutes?</p>
                        <div className="chat-message-data">4/27/17, 16:37</div>
                    </div>
                </main>
                <ChatForm />
            </>
        )
    }
}

export default ChatSection;