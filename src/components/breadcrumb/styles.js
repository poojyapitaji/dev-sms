import styled from 'styled-components'
import theme from '../../utils/theme'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    color: ${(props) => theme.colors[props.$color]};
    ${theme.font.medium};
`

export const Link = styled.a`
    text-decoration: none;
    cursor: ${(props) => (props.$active ? 'not-allowed' : 'pointer')};
    color: ${(props) => (props.$active ? theme.colors.text.light : theme.colors[props.$color])};
    ${theme.font.medium};
    font-size: ${(props) => theme.fontSize[props.$size]};
`

export const Arrow = styled.img`
    width: ${(props) => theme.iconSize[props.$size]};
`
