import styled, { css } from 'styled-components'
import theme from '../../../utils/theme'

export const ActionButton = styled.button`
    ${(props) => props.size && buttonFont[props.size]}
    ${(props) => props.$variant && buttonColor[props.$variant]}
    padding: ${(props) => props.size && theme.padding[props.size]};
    font-size: ${(props) => props.size && theme.fontSize[props.size]};
    border-radius: ${(props) => props.size && theme.borderRadius[props.size]};
    ${theme.mixin.clickable};
    border: 1px solid ${(props) => theme.colors[props.$variant]};
    display: flex;
    align-items: center;
    gap: 5px;
    ${(props) =>
        props.$rounded &&
        css`
            border-radius: 50% !important;
        `}

    &:disabled {
        ${theme.disabled};
    }
`

export const Img = styled.img`
    ${(props) => props.size && theme.size[props.size]}
`

const buttonFont = {
    sm: css`
        ${theme.font.regular};
    `,
    normal: css`
        ${theme.font.medium};
    `,
    lg: css`
        ${theme.font.bold};
    `,
    xl: css`
        ${theme.font.black};
    `,
}

const buttonColor = {
    primary: css`
        color: ${theme.colors.text.white};
        background: ${theme.colors.primary};

        &:active {
            background: ${theme.mixin.lighten(theme.colors.primary, 0.5)};
        }
    `,
    success: css`
        color: ${theme.colors.text.white};
        background: ${theme.mixin.lighten(theme.colors.success, 0.3)};

        &:active {
            background: ${theme.mixin.lighten(theme.colors.success, 0.5)};
        }
    `,
    danger: css`
        color: ${theme.colors.text.white};
        background: ${theme.mixin.darken(theme.colors.danger, 0)};

        &:active {
            background: ${theme.mixin.lighten(theme.colors.danger, 0.3)};
        }
    `,
    warning: css`
        color: ${theme.colors.text.darkest};
        background: ${theme.mixin.darken(theme.colors.warning, 0)};

        &:active {
            background: ${theme.mixin.lighten(theme.colors.warning, 0.2)};
        }
    `,
    secondary: css`
        color: ${theme.colors.primary};
        background: ${theme.colors.secondary};

        &:active {
            background: ${theme.mixin.darken(theme.colors.secondary, 0.1)};
        }
    `,
    info: css`
        color: ${theme.colors.text.white};
        background: ${theme.mixin.lighten(theme.colors.info, 0.6)};

        &:active {
            background: ${theme.mixin.lighten(theme.colors.info, 0.5)};
        }
    `,
    transparent: css`
        color: ${theme.colors.text.primary};
        background: ${theme.colors.transparent};

        &:active {
            background: ${theme.mixin.lighten(theme.colors.transparent, 0.5)};
        }
    `,
}
