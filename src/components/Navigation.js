import React from 'react'
import Menu from './Menu'
import { ReactComponent as Logo } from '../images/logo.svg'
import { ReactComponent as SearchIcon } from '../images/searchIcon.svg'
import '../styles/navigation.scss'

export default function Navigation() {
    return (
        <div className="navigation">
            <div className="container">
                <Logo className="logo" />
                <div className="search">
                    <SearchIcon className="searchIcon" />
                    <span className="searchText">Search</span>
                </div>
                <Menu />
            </div>
        </div>
    )
}
