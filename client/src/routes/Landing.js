import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {
    Theme,
    FlexContainer
} from '../components/Theme'

const Layout = styled.div`
    ${FlexContainer}
    max-width: 800px;
`

function Landing() {
    return (
        <Theme>
            <Layout>
                <NavBar />
                <Outlet />
            </Layout>
            <Footer />
        </Theme>
    )
}

export default Landing
