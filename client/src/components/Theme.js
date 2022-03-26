import React from 'react'
import { ThemeProvider } from 'styled-components'

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

const Theme = (props) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default Theme
