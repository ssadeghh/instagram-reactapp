import React from 'react'
import '../styles/cardmenu.scss';
import {ReactComponent as Inbox} from '../images/inbox.svg'
import {ReactComponent as Comments} from '../images/comments.svg'
import {ReactComponent as Notification} from '../images/notification.svg'
import {ReactComponent as Bookmark} from '../images/bookmark.svg'

export default function CardMenu() {
  return (
    <div className='cardMenu'>
        <div className='interactions'>
            <Notification className='icon'/>
            <Comments className='icon'/>
            <Inbox className='icon'/>
        </div>
        <Bookmark className='icon'/>
    </div>
  )
}
