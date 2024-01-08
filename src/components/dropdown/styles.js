import styled, { css } from 'styled-components'
import theme from '../../utils/theme'

export const Container = styled.div``

export const ContantContainer = styled.div`
    position: absolute;
    min-width: 150px;
    width: auto;
    z-index: ${theme.zIndex.dropdown};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.borderRadius.normal};
    box-shadow: ${theme.boxShadow.dropdown};
    ${(props) => props.$position && props.$linkPosition && containerPosition[props.$position]}
`

const containerPosition = {
    'top-left': css`
        top: ${(props) => props.$linkPosition.height + 13}px;
        left: ${(props) => props.$linkPosition.left}px;
        animation: ${theme.animation.slideInDownSmall};
    `,
    'top-right': css`
        top: ${(props) => props.$linkPosition.height + 13}px;
        right: ${(props) => window.innerWidth - props.$linkPosition.right}px;
        animation: ${theme.animation.slideInDownSmall};
    `,
    'bottom-left': css`
        bottom: ${(props) => props.$linkPosition.height + 22}px;
        left: ${(props) => props.$linkPosition.left}px;
        animation: ${theme.animation.slideInUpSmall};
    `,
    'bottom-right': css`
        bottom: ${(props) => props.$linkPosition.height + 22}px;
        right: ${(props) => window.innerWidth - props.$linkPosition.right}px;
        animation: ${theme.animation.slideInUpSmall};
    `,
}
