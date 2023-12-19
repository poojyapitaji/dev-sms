import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import theme from './utils/theme'
import Toast from './components/toast'
import toast from './utils/toast'

const GlobalStyles = createGlobalStyle`
  * {
    ${theme.font.regular};
    ${theme.mixin.scrollableY};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const toastSettings = {
    withCloseIcon: true,
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <GlobalStyles />
        <Toast {...toastSettings} />
        <div style={{ padding: '50px' }}>
            <button onClick={() => toast.success('This is a success toast.')}>
                Show Success toast
            </button>
            <button onClick={() => toast.warning('This is a warning toast.')}>
                Show Warning toast
            </button>
            <button onClick={() => toast.info('This is a info toast.')}>Show Info toast</button>
            <button onClick={() => toast.danger('This is a danger toast.')}>
                Show Danger toast
            </button>
        </div>
    </React.StrictMode>,
)
