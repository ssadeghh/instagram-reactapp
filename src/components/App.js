import React from 'react'
import '../styles/App.scss'
import Navigation from './Navigation'
import Cards from './Cards'
import Sidebar from './Sidebar'

export default function App() {
    return (
        <div>
            <Navigation />
            <main>
              <div className='container'>
                <Cards/>
                <Sidebar/>
              </div>
            </main>
        </div>
    )
}
