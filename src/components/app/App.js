import { Component } from "react";

import UserSection from "../userSection/UserSection";
import ContactsSection from "../contactsSection/ContactsSection";
import ChatSection from "../chatSection/ChatSection";

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <section className="info-section">
                    <UserSection />
                    <ContactsSection />
                </section>
                <section className="chat-section">
                    <ChatSection />
                </section>
            </div>
        )
    }
}

export default App;