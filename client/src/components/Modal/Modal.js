import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../Theme'

const ModalOverlay = styled.div`
    ${FlexContainer}
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .6);
    z-index: ${props => props.isVisible ? '10' : '-1'};
    opacity: ${props => props.isVisible ? '1' : '0'};
    transform: ${props => props.isVisible ? 'scale(1)' : 'scale(0)'};
    transition: all .25s ease-in-out;
`

const ModalContainer = styled.div`
    width: 100%;
    max-width: 800px;
    max-height: 90%;
    overflow-wrap: break-word;
    overflow-y: scroll;
    background-color: ${props => props.theme.colors.backgroundPrimary};
    box-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    border: 2px solid ${props => props.theme.colors.borderColor};
`

function Modal(props) {
    return (
        <ModalOverlay isVisible={props.show}>
            <ModalContainer>
                {props.children}
            </ModalContainer>
        </ModalOverlay>
    )
}

export default Modal
