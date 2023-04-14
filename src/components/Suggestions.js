import React from 'react'
import '../styles/suggestions.scss'
import Profile from './Profile'

export default function Suggestions() {
    return (
        <div className="suggestions">
            <div className="titleContainer">
                <div className="title">Suggestions for you</div>
                <a href="/">See All</a>
            </div>

            <Profile
                caption="Followed by mapvalut + 3 more"
                urlText="Follow"
                iconSize="medium"
                captionSize="small"
                storyBorder={true}
            />
            <Profile
                caption="Followed by mapvalut + 1 more"
                urlText="Follow"
                iconSize="medium"
                captionSize="small"
                storyBorder={true}
            />
            <Profile
                caption="Follows you"
                urlText="Follow"
                iconSize="medium"
                captionSize="small"
                storyBorder={true}
            />
            <Profile
                caption="Followed by mapvalut + 7 more"
                urlText="Follow"
                iconSize="medium"
                captionSize="small"
            />
            <Profile
                caption="Followed by mapvalut + 4 more"
                urlText="Follow"
                iconSize="medium"
                captionSize="small"
                storyBorder={true}
            />
        </div>
    )
}
