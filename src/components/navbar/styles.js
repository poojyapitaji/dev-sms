import styled, { css } from 'styled-components'
import theme from '../../utils/theme'

export const Container = styled.div`
    height: 32px;
    width: -webkit-fill-available;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    box-shadow: ${theme.boxShadow.subtle};
    background: ${theme.colors.primary};
    padding: ${theme.padding.lg};
`

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${theme.colors.text.white};
`

export const CenterContainer = styled.div``

export const RightContainer = styled.div``

export const Img = styled.img`
    height: ${theme.iconSize.large};

    ${(props) =>
        props.$menuBtn &&
        css`
            ${theme.mixin.clickable};
        `}
`
