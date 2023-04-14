import React from 'react'
import '../styles/menu.scss'

import { ReactComponent as Home } from '../images/home.svg'
import { ReactComponent as Notification } from '../images/notification.svg'
import { ReactComponent as Inbox } from '../images/inbox.svg'
import { ReactComponent as Explore } from '../images/exploreIcon.svg'
import ProfileIcon from './ProfileIcon'

export default function Menu() {
    return (
        <div className="menu">
            <Home className="icon" />
            <Inbox className="icon" />
            <Explore className="icon" />
            <Notification className="icon" />
            <ProfileIcon iconSize="small"/>
        </div>
    )
}
