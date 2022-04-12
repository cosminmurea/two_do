import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import {
    Theme,
    FlexContainer,
    Header,
    Label
} from '../components/Theme'

const AppContainer = styled.div`
    ${FlexContainer}
    max-width: 800px;
`

const MainHeader = styled(Header)`
    color: ${props => props.theme.colors.textPrimary};
    margin-top: 2.5rem;
    margin-bottom: .5rem;
`

const SubHeader = styled(Label)`
    margin-bottom: 2.5rem;
`

function Landing() {
    return (
        <Theme>
            <AppContainer>
                <MainHeader>twoDo</MainHeader>
                <SubHeader>Stay Organized!</SubHeader>
                <nav
                    style={{
                        paddingBottom: '1rem',
                    }}
                >
                    <Link
                        to='/login'
                    >
                        Login
                    </Link>
                    <Link
                        to='/register'
                        style={{
                            marginLeft: '1rem',
                        }}
                    >
                        Register
                    </Link>
                    <Link
                        to='/home'
                        style={{
                            marginLeft: '1rem',
                        }}
                    >
                        Home
                    </Link>
                </nav>
                <Outlet />
            </AppContainer>
            <Footer />
        </Theme>
    )
}

export default Landing
