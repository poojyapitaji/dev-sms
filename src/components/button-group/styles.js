import styled, { css } from 'styled-components'

export const Conatainer = styled.div`
    display: flex;
    ${(props) =>
        props.$childrenCount > 1 &&
        css`
            & > :first-child {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
            & > :last-child {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
            & > :not(:first-child):not(:last-child) {
                border-radius: 0;
            }
        `}
`
