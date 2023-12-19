import styled from 'styled-components'
import theme from '../../utils/theme'

export const Overlay = styled.div`
    ${theme.mixin.fixed};
    background: ${theme.overlay.background};
    z-index: ${theme.zIndex.overlay};
    ${theme.mixin.flexCenter};
    animation: ${({ $isClosing }) =>
        $isClosing ? theme.animation.fadeOut : theme.animation.fadeIn};
    height: 100vh;
    width: 100vw;
`

export const Container = styled.div`
    padding: ${theme.padding.xl};
    background: ${theme.colors.background.white};
    border-radius: ${theme.borderRadius.lg};
    animation: ${({ $isClosing }) =>
        $isClosing ? theme.animation.slideOutReverse : theme.animation.slideInReverse};
    min-width: 500px;
    height: auto;

    @media screen and (max-width: ${theme.breakpoints.sm}) {
        min-width: auto;
        width: 100%;
        margin: ${theme.margin.lg};
    }
`
