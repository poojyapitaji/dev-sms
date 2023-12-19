import styled, { css } from 'styled-components'
import theme from '../../utils/theme'

export const ToastContainer = styled.div`
    ${(props) => toastPositions[props.$position]};
    z-index: ${theme.zIndex.toast};
    ${theme.transition};
    position: absolute;
    max-width: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;

    @media screen and (max-width: ${theme.breakpoints.xs}) {
        max-width: 100%;
        width: auto;
    }
`

export const Container = styled.div`
    ${(props) => toastAnimation[props.$position]};
    padding: ${theme.padding.normal};
    border: 1px solid ${theme.colors.lightGray};
    border-radius: ${theme.borderRadius.lg};
    background: ${theme.colors.secondary};
    box-shadow: ${theme.boxShadow.toast};
    ${theme.transition};
    ${theme.font.medium};
    color: ${theme.colors.text.dark};
    font-size: 15px;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    position: relative;
`

const toastPositions = {
    'top-right': css`
        right: 0px;
        top: 0px;
        padding: 15px;

        @media screen and (max-width: ${theme.breakpoints.xs}) {
            left: 0px;
        }
    `,
    'top-left': css`
        left: 0px;
        top: 0px;
        padding: 15px;

        @media screen and (max-width: ${theme.breakpoints.xs}) {
            right: 0px;
        }
    `,
    'bottom-left': css`
        left: 0px;
        bottom: 0px;
        padding: 15px;

        @media screen and (max-width: ${theme.breakpoints.xs}) {
            right: 0px;
        }
    `,
    'bottom-right': css`
        right: 0px;
        bottom: 0px;
        padding: 15px;

        @media screen and (max-width: ${theme.breakpoints.xs}) {
            left: 0px;
        }
    `,
    'top-center': css`
        top: 0px;
        left: 50%;
        padding: 15px;
        margin-left: calc(-350px / 2);

        @media screen and (max-width: ${theme.breakpoints.xs}) {
            margin-left: 0px;
            left: 0px;
            right: 0px;
        }
    `,
    'bottom-center': css`
        bottom: 0px;
        left: 50%;
        padding: 15px;
        margin-left: calc(-350px / 2);

        @media screen and (max-width: ${theme.breakpoints.xs}) {
            margin-left: 0px;
            left: 0px;
            right: 0px;
        }
    `,
}

const toastAnimation = {
    'top-right': css`
        animation: ${theme.animation.slideInRightSmall};
    `,
    'top-left': css`
        animation: ${theme.animation.slideInLeftSmall};
    `,
    'bottom-left': css`
        animation: ${theme.animation.slideInLeftSmall};
    `,
    'bottom-right': css`
        animation: ${theme.animation.slideInRightSmall};
    `,
    'top-center': css`
        animation: ${theme.animation.slideInDownSmall};
    `,
    'bottom-center': css`
        animation: ${theme.animation.slideInUpSmall};
    `,
}

export const CloseIcon = styled.img`
    height: ${theme.iconSize.normal};
    ${theme.mixin.clickable};
    position: absolute;
    right: 8px;
    top: 7px;
`

export const InfoImg = styled.img`
    height: ${theme.iconSize.medium};
    position: absolute;
    top: 5px;
`

export const Text = styled.div`
    margin: 0px 29px;
`
