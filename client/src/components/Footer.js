import React from 'react'
import styled from 'styled-components'
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaGithub,
    FaYoutube
} from 'react-icons/fa'
import landingBackground from '../assets/landing_bg.jpg'
import {
    FlexContainer,
    Label,
    SocialMediaIcons
} from './Theme'

const FooterContainer = styled.div`
    ${FlexContainer}
    height: 35%;
    background: url(${landingBackground}) no-repeat center;
    background-size: cover;
    background-attachment: fixed;
    text-align: center;
    padding: 0;
    margin-top: auto;
`

const FooterContent = styled(Label)`
    font-size: 1.5rem;
    margin: 4rem 0;
    padding: 0 1rem;
    > a {
        color: ${props => props.theme.colors.textPrimary};
        font-weight: 500;
    }
`

const FooterSocialMedia = styled(SocialMediaIcons)`
    margin-top: 2.5rem;
`

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                &copy; 2022 | Developed and Designed In-House by <a href='#!'>point.Zero</a>
                <FooterSocialMedia>
                    <a href='#!'><FaFacebookF /></a>
                    <a href='#!'><FaLinkedinIn /></a>
                    <a href='#!'><FaTwitter /></a>
                    <a href='#!'><FaGithub /></a>
                    <a href='#!'><FaYoutube /></a >
                </FooterSocialMedia>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer
