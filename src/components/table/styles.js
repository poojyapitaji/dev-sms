import theme from '../../utils/theme'
import Button from '../../components/common/button'
import Input from '../../components/common/input-field'
import styled, { css } from 'styled-components'

export const Container = styled.div`
    overflow-x: auto;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const SearchInput = styled(Input)`
    width: 350px;
    ${(props) =>
        props.$border &&
        css`
            border: 1px solid ${theme.colors.lightGray};

            &:hover,
            &:active {
                border: 1px solid ${theme.colors.lightGray};
            }

            &:focus,
            &:focus-within {
                border: 1px solid ${theme.colors.primary};
            }
        `}
`

export const IconButton = styled(Button)`
    ${(props) =>
        props.$active &&
        css`
            ${theme.font.bold};
            ${theme.disabled};
        `}
`

export const TableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;

    ${(props) =>
        props.$border &&
        css`
            border: 1px solid ${theme.colors.lightGray};

            th,
            td {
                border-bottom: 1px solid ${theme.colors.lightGray};
            }
        `}

    ${(props) =>
        props.$striped &&
        css`
            tbody,
            tr {
                &:nth-of-type(even) {
                    background: ${theme.colors.secondary};
                }
            }
        `}
`

export const TableHead = styled.thead`
    border-bottom: 1px solid ${theme.colors.lightGray};
    background: ${theme.colors.secondary};
`

export const TabelFoot = styled.tfoot`
    border-bottom: 1px solid ${theme.colors.lightGray};
    background: ${theme.colors.secondary};
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
    align-items: center;
    font-size: calc(${(props) => theme.fontSize[props.$size]} / 1.2);
    color: ${theme.colors.primary};
    text-align: left;

    th:last-child,
    td:last-child {
        text-align: right;
    }

    td {
        font-size: calc(${(props) => theme.fontSize[props.$size]} / 1.3);
        div {
            float: right;
        }
        button {
            padding: 4px;
        }
    }

    td,
    th {
        padding: ${(props) => theme.padding[props.$size]};
    }
`

export const TableData = styled.td`
    ${theme.font.regular};
    color: ${theme.colors.primary};
    border-bottom: 1px solid ${theme.colors.secondary};
`

export const TableHeading = styled.th`
    ${theme.font.bold};
`

export const TableHeadingContainer = styled.div`
    ${theme.mixin.clickable};
    ${theme.font.bold};
`

export const PaginationContainer = styled.div`
    float: right;

    button {
        padding: calc(${(props) => theme.padding[props.$size]} / 2);
        font-size: calc(${(props) => theme.fontSize[props.$size]} / 1.2);
    }
`

export const NoDataContainer = styled.div`
    padding: ${theme.padding.lg};
    ${theme.mixin.flexCenter};
    color: ${theme.colors.lightGray};
    ${theme.font.bold};
    ${theme.mixin.flexCenter};
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

export const NoDataImg = styled.img`
    max-height: 100px;
`
