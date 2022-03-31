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
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        background-color: ${props => props.theme.colors.backgroundPrimary};
        color: ${props => props.theme.colors.textSecondary};
    }
    input:focus {
        outline: none;
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
    text-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
`

const Label = styled.label`
    display: block;
    font-size: 1.7rem;
    text-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    margin-top: ${props => props.modal ? '1.5rem' : '0'};
    margin-bottom: 1.5rem;
`

const Input = styled.input`
    width: 100%;
    color: ${props => props.theme.colors.textSecondary};
    font-size: 1.5rem;
    background: transparent;
    box-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    border: 2px solid ${props => props.theme.colors.borderColor};
    border-left: ${props => props.modal && 'none'};
    border-right: ${props => props.modal && 'none'};
    padding: .7rem;
    margin-bottom: ${props => props.modal ? '3.5rem' : '1.5rem'};
`

const Button = styled.button`
    width: 80%;
    color: ${props => props.theme.colors.textSecondary};
    font-size: 1.3rem;
    text-transform: uppercase;
    background: transparent;
    text-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    box-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    border: 2px solid ${props => props.theme.colors.borderColor};
    padding: .6rem 0;
    margin-bottom: ${props => props.modal ? '1rem' : '2.5rem'};
    transition: .3s ease-out;
    &:hover, &:focus {
        background: ${props => props.theme.colors.borderColor}
    }
`

const ModalButton = styled(Button)`
    &:last-of-type {
        margin-bottom: 3.5rem;
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
    ModalButton
}
