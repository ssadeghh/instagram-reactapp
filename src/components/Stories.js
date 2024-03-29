import React from 'react'
import '../styles/stories.scss'
import HorizontalScroll from 'react-scroll-horizontal'
import Story from './Story'

export default function Stories() {
  return (
    <div className='stories'>
        <HorizontalScroll className='scroll' reverseScroll={true}>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
        </HorizontalScroll>
    </div>
  )
}
