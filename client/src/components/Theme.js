import React from 'react'
import styled, { ThemeProvider, createGlobalStyle, css } from 'styled-components'

const theme = {
    colors: {
        backgroundPrimary: '#272932',
        textPrimary: '#ee6352',
        textSecondary: '#f7fff7',
        borderColor: '#345b72',
        shadowColor: 'rgba(24, 24, 24, 0.7)',
        extraColor: '#28afb0'
    },
    fonts: ['Arvo', 'sans-serif'],
    fontSizes: {
        header: '3.5rem',
        label: '2rem',
        content: '1.5rem',
        button: '1.3rem'
    }
}

/*
Global styles, applied to the entire application;
*/
const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: Arvo, serif;
        text-decoration: none;
        padding: 0;
        margin: 0;
        -webkit-tap-highlight-color: transparent;
    }
    html {
        scroll-behavior: smooth;
    }
    html::-webkit-scrollbar {
        display: none;
    }
    body {
        background-color: ${props => props.theme.colors.backgroundPrimary};
        color: ${props => props.theme.colors.textSecondary};
    }
    input:focus {
        outline: none;
    }
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
`

/*
Reusable components, extend these styles when creating specific components (DRY);
*/
const FlexContainer = css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    margin: 0 auto;
`

const Header = styled.h2`
    color: ${props => props.theme.colors.textSecondary};
    font-size: ${props => props.theme.fontSizes.header};
    text-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
`

const Label = styled.label`
    display: block;
    font-size: ${props => props.theme.fontSizes.label};
    text-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    margin-top: ${props => props.modal ? '1.5rem' : '0'};
    margin-bottom: 1.5rem;
`

const Input = styled.input`
    width: 100%;
    color: ${props => props.theme.colors.textSecondary};
    font-size: ${props => props.theme.fontSizes.content};
    background: transparent;
    box-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    border: 2px solid ${props => props.theme.colors.borderColor};
    border-left: ${props => props.modal && 'none'};
    border-right: ${props => props.modal && 'none'};
    padding: .7rem;
    margin-bottom: ${props => props.modal ? '3.5rem' : '1.5rem'};
`

const Button = styled.button`
    position: relative;
    overflow: hidden;
    z-index: 1;
    width: 80%;
    color: ${props => props.theme.colors.textSecondary};
    font-size: ${props => props.theme.fontSizes.button};
    text-transform: uppercase;
    background: transparent;
    text-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    box-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    border: 2px solid ${props => props.theme.colors.borderColor};
    padding: .6rem 0;
    margin-bottom: ${props => props.modal ? '1rem' : '2.5rem'};
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.colors.borderColor};
        transform: translate(-100%, 0);
        transition: .3s ease-out;
    }
    &:hover,
    &:focus {
        background: ${props => props.theme.colors.borderColor}
    }
    &:hover::before,
    &:focus::before {
        transform: translate(0%, 0);
    }
`

const ModalButton = styled(Button)`
    transition: .3s ease-in-out;
    &:last-of-type {
        margin-bottom: 3.5rem;
    }
`

const SocialMediaIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 1rem;
    > a {
        color: ${props => props.theme.colors.textSecondary};
        text-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
        transition: .25s ease-out;
    }
    > a:hover,
    > a:focus {
        color: ${props => props.theme.colors.extraColor};
    }
`

const Theme = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {props.children}
        </ThemeProvider>
    )
}

export {
    Theme,
    FlexContainer,
    Header,
    Label,
    Input,
    Button,
    ModalButton,
    SocialMediaIcons
}
