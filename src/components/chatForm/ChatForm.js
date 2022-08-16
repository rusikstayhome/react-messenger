import { Component } from "react";

import './ChatForm.css'

import sendImg from './send-icon.png'

class ChatForm extends Component {
    render() {
        return (
            <footer>
                <form action="" className="send-message">
                    <input type="text" placeholder="Type your message" />
                    <a href="/">
                        <img src={sendImg} alt="" />
                    </a>
                </form>
            </footer>
        )
    }
}

export default ChatForm;