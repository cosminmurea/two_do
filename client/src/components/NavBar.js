import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 800px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.background ? props.theme.colors.backgroundPrimary : 'transparent'};
    padding: 1.3rem 1rem;
    transition: .3s ease-in-out;
`

const NavLogo = styled.h4`
    z-index: 10;
    color: ${props => props.theme.colors.textPrimary};
    font-size: ${props => props.theme.fontSizes.label};
    font-weight: 700;
    text-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
`

const NavButton = styled.button`
    display: block;
    position: relative;
    height: 2rem;
    width: 2rem;
    z-index: 10;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    transition: .3s ease-in-out;
    > div {
        display: block;
        position: absolute;
        height: .2rem;
        width: 100%;
        background-color: ${props => props.theme.colors.textPrimary};
        box-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
        transition: .3s ease-in-out;
    &:nth-child(1) {
        top: ${props => !props.open && '.5rem'};
        transform: ${props => props.open && 'rotate(135deg)'};
    }
    &:nth-child(2) {
        top: ${props => !props.open && '1rem'};
        opacity: ${props => props.open ? '0' : '1'};
    }
    &:nth-child(3) {
        top: ${props => !props.open && '1.5rem'};
        transform: ${props => props.open && 'rotate(-135deg)'};
    }
    }
`

const NavMenu = styled.div`
    position: fixed;
    top: 0;
    right: ${props => props.open ? '0' : '-100%'};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    overflow-y: scroll;
    background-color: ${props => props.theme.colors.backgroundPrimary};
    transition: .3s ease-in-out;
`

const StyledLink = styled(Link)`
    color: ${props => props.theme.colors.textSecondary};
    font-size: ${props => props.theme.fontSizes.label};
    text-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    transition: .3s ease-in-out;
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.extraColor};
    }
`

function NavBar() {
    const [changedBg, setChangedBg] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { pathname } = useLocation()

    const toggleMenu = () => {
        if (menuOpen) {
            setMenuOpen(false)
            document.body.style.overflowY = 'unset'
        } else {
            setMenuOpen(true)
            document.body.style.overflowY = 'hidden'
        }
    }

    const closeMenu = () => {
        setMenuOpen(false)
        document.body.style.overflowY = 'unset'
    }

    useEffect(() => {
        closeMenu()
    }, [pathname])

    const changeBgColorOnScroll = () => {
        if (window.scrollY > 20) {
            setChangedBg(true)
        } else {
            setChangedBg(false)
        }
    }

    useEffect(() => {
        changeBgColorOnScroll()
        window.addEventListener('scroll', changeBgColorOnScroll)
    })

    return (
        <NavContainer
            background={changedBg}
        >
            <NavLogo>twoDo</NavLogo>

            <NavButton
                open={menuOpen}
                onClick={toggleMenu}
            >
                <div></div>
                <div></div>
                <div></div>
            </NavButton>

            <NavMenu
                open={menuOpen}
            >
                <StyledLink
                    to='/login'
                >
                    Login
                </StyledLink>
                <StyledLink
                    to='/register'
                >
                    Register
                </StyledLink>
                <StyledLink
                    to='/home'
                >
                    Home
                </StyledLink>
            </NavMenu>
        </NavContainer>
    )
}

export default NavBar
