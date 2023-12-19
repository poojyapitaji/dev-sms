import styled from 'styled-components'
import theme from '../../../utils/theme'

export const InputField = styled.input`
    padding: ${(props) => theme.padding[props.size]};
    font-size: ${(props) => theme.fontSize[props.size]};
    color: ${(props) =>
        props.$variant === 'secondary' ? theme.colors.primary : theme.colors[props.$variant]};
    border-radius: ${(props) => theme.borderRadius[props.size]};
    ${theme.font.regular};
    ${theme.transition};
    background: ${theme.colors.secondary};
    border: 1px solid
        ${(props) =>
            props.$variant === 'secondary' ? theme.colors.secondary : theme.colors.lightGray};
    width: 100%;

    &:hover,
    &:focus,
    &:active,
    &:focus-visible {
        border: 1px solid ${(props) => theme.colors[props.$variant]};
    }

    &::placeholder {
        color: ${theme.colors.text.light};
    }

    &:invalid {
        color: ${theme.colors.danger};
        border: 1px solid ${theme.colors.danger};
        &:hover,
        &:focus,
        &:active,
        &:focus-visible {
            border: 1px solid ${theme.colors.danger};
        }
    }

    &:disabled {
        ${theme.disabled};
    }

    &:focus-visible {
        outline: none;
    }
`
