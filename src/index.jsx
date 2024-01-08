import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import theme from './utils/theme'

const GlobalStyles = createGlobalStyle`
  * {
    ${theme.font.regular};
    ${theme.mixin.scrollableY};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  main {
    padding:10px;
  }
`
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <GlobalStyles />
        <main></main>
    </React.StrictMode>,
)
