import React from 'react'
import '../styles/sidebar.scss'
import Sticky from 'react-sticky-el'
import Profile from './Profile'
import Suggestions from './Suggestions'
import Footer from './Footer'

export default function Sidebar() {
    return (
            <Sticky topOffset={-80}>
                <div className="sidebar">
                    <Profile
                        username="aleks.popovic"
                        caption="Aleksandar Popovi"
                        urlText="Switch"
                        iconSize="big"
                    />
                    <Suggestions/>
                    <Footer/>
                </div>
            </Sticky>
    )
}
