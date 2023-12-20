import styled, { css } from 'styled-components'
import theme from '../../utils/theme'

export const Overlay = styled.div`
    ${theme.mixin.fixed};
    background: ${theme.overlay.background};
    z-index: ${theme.zIndex.overlay};
    ${theme.mixin.flexCenter};
    animation: ${theme.animation.fadeIn};
    height: 100vh;
    width: 100vw;
`

export const Container = styled.div`
    background: ${theme.colors.background.white};
    border-radius: ${theme.borderRadius.lg};
    animation: ${theme.animation.zoomInSmall};
    margin: ${theme.margin.lg};
    min-width: 500px;
    max-width: 900px;
    height: auto;
    overflow: hidden;
    max-height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;

    @media screen and (max-width: ${theme.breakpoints.sm}) {
        min-width: auto;
        width: 100%;
        margin: ${theme.margin.lg};
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    max-height: calc(40px + ${theme.padding.lg});
    padding: ${theme.padding.lg};
    border-bottom: 1px solid ${theme.colors.lightGray};
    color: ${theme.colors.primary};
    ${theme.font.medium};
`

export const Body = styled.div`
    flex: 1;
    padding: ${theme.padding.xl};
`

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    max-height: calc(40px + ${theme.padding.lg});
    padding: ${theme.padding.lg};
    border-top: 1px solid ${theme.colors.lightGray};
    color: ${theme.colors.primary};
    ${theme.font.medium};
`
