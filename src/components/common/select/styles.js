import styled, { css } from 'styled-components'
import theme from '../../../utils/theme'

export const Container = styled.div`
    ${(props) =>
        props.$disabled &&
        css`
            ${theme.disabled};
        `}
`

export const SelectContainer = styled.div`
    border: 1px solid
        ${(props) =>
            props.$variant === 'secondary' ? theme.colors.secondary : theme.colors.lightGray};
    border-radius: ${(props) => theme.borderRadius[props.size]};
    background: ${theme.colors.secondary};
    height: auto;
    width: 100%;
    min-width: 250px;
    display: flex;
    justify-content: space-between;
`

export const SelectedText = styled.div`
    flex: 1;
    ${theme.mixin.truncateText};
    ${theme.mixin.clickable};
    padding: ${(props) => theme.padding[props.size]};
    font-size: ${(props) => theme.fontSize[props.size]};
    ${(props) =>
        props.$notSelected
            ? css`
                  color: ${theme.colors.text.light};
              `
            : css`
                  color: ${(props) =>
                      props.$variant === 'secondary'
                          ? theme.colors.primary
                          : theme.colors[props.$variant]};
              `}
`

export const ArrowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`
    ${theme.mixin.clickable};
    overflow: hidden;
    height: ${(props) => theme.fontSize[props.size]};
    margin-right: calc(${(props) => theme.fontSize[props.size]} / 3);
    ${theme.transition};
    ${(props) =>
        props.$arrow &&
        css`
            margin-right: calc(${theme.fontSize[props.size]} / 2);
            transform: ${props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
        `}
`

export const OptionsContainer = styled.div`
    background: ${theme.colors.secondary};
    border: 1px solid
        ${(props) =>
            props.$variant === 'secondary' ? theme.colors.secondary : theme.colors.lightGray};
    border-radius: ${(props) => theme.borderRadius[props.size]};
    padding: ${(props) => theme.padding[props.size]};
    font-size: ${(props) => theme.fontSize[props.size]};
    box-shadow: ${theme.boxShadow.medium};
    position: absolute;
    padding: 10px;
    max-height: 200px;
    overflow-y: auto;
    animation: ${theme.animation.slideInDownSmall};
`

export const Option = styled.div`
    cursor: pointer;
    padding: 5px 0px;
    ${theme.mixin.truncateText};
    font-size: ${(props) => theme.fontSize[props.size]};
    color: ${(props) =>
        props.$variant === 'secondary' ? theme.colors.primary : theme.colors[props.$variant]};
`
