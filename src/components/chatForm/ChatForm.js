import { Component } from "react";

import './ChatForm.css'

class ChatForm extends Component {
    render() {
        return (
            <form action="" className="send-message">
                <input type="text" placeholder="Type your message" />
            </form>
        )
    }
}

export default ChatForm;