import React from 'react'
import '../styles/cards.scss'
import Stories from './Stories'
import Card from './Card'

export default function Cards() {
    const commentsOne = [
        {
            user: 'sadasdasd',
            text: "Woah that's great",
            id: 1,
        },
        {
            user: 'saedqwe',
            text: 'Liked!',
            id: 2,
        },
        {
            user: 'kfoqwkeds',
            text: 'Wonderful!',
            id: 3,
        },
    ]
    return (
        <div className="cards">
            <Stories />

            <Card
                accountName="adsadas"
                storyBorder={true}
                image="https://picsum.photos/800/900"
                comments={commentsOne}
                likedByText="dadda"
                likedByNumber={89}
                hours={16}
            />
            <Card
                accountName="smadasd"
                storyBorder={true}
                image="https://picsum.photos/800"
                comments={commentsOne}
                likedByText="dadda"
                likedByNumber={47}
                hours={20}
            />
            <Card
                accountName="dududsad"
                storyBorder={true}
                image="https://picsum.photos/800/1000"
                comments={commentsOne}
                likedByText="dadda"
                likedByNumber={90}
                hours={10}
            />
        </div>
    )
}
