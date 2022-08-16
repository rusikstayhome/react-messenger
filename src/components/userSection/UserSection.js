import { Component } from "react";


import './UserSection.css'

import profileIcon from './profile-icon.png'
import searchIcon from './search-icon.png'

class UserSection extends Component {
    render() {
        return (
            <nav>
                <img src={profileIcon} alt="profile icon" />
                <form action="">
                    <img src={searchIcon} alt="" />
                    <input className="test" type="text" placeholder="Search or start new chat" />
                </form>
            </nav>
        )
    }
}

export default UserSection;