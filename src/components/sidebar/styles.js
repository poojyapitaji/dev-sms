import styled from 'styled-components'
import theme from '../../utils/theme'

export const Container = styled.div`
    margin-top: 64px;
    width: 250px;
    height: calc(100vh - (64px + ${theme.padding.lg} * 2));
    box-shadow: ${theme.boxShadow.subtle};
    background: ${theme.colors.primary};
    padding: ${theme.padding.lg};
    ${theme.mixin.scrollableY};

    @media screen and (max-width: ${theme.breakpoints.lg}) {
        transform: translate(-100%);
    }
`
