import React from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${props => props.isVisible ? '10' : '-1'};
    opacity: ${props => props.isVisible ? '1' : '0'};
    transform: ${props => props.isVisible ? 'scale(1)' : 'scale(0)'};
    transition: all .25s ease-out;
    background-color: rgba(0, 0, 0, .6);
    padding: 0 1.2em;
`

const ModalCard = styled.div`
    width: 100%;
    max-width: 800px;
    max-height: 90%;
    overflow-wrap: break-word;
    overflow-y: scroll;
    background-color: ${props => props.theme.colors.backgroundPrimary};
    box-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    border: 2px solid ${props => props.theme.colors.borderColor};
    padding: 1.5em 0;
    &::-webkit-scrollbar {
        display: none;
    }
`

const ModalButton = styled.button`
    display: block;
    width: 80%;
    color: ${props => props.theme.colors.textSecondary};
    font-size: 1.2em;
    text-transform: uppercase;
    background: transparent;
    text-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    box-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    border: 2px solid ${props => props.theme.colors.borderColor};
    padding: .5em 0;
    margin: auto;
    margin-bottom: .5em;
    transition: all .3s ease-out;
    &:hover {
        background-color: ${props => props.theme.colors.borderColor};
    }
`

function Modal(props) {
    return (
        <ModalContainer isVisible={props.show}>
            <ModalCard>
                {props.children}
            </ModalCard>
        </ModalContainer>
    )
}

export { Modal, ModalButton }
