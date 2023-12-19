import ButtonGroup from '../../components/button-group'
import images from '../../assets/images'
import {
    Container,
    Header,
    IconButton,
    NoDataContainer,
    NoDataImg,
    PaginationContainer,
    SearchInput,
    TabelFoot,
    TableBody,
    TableContainer,
    TableData,
    TableHead,
    TableHeading,
    TableHeadingContainer,
    TableRow,
} from './styles'
import { useEffect, useState } from 'react'

const Table = ({
    columns = [],
    data = [],
    searchable = true,
    exports = true,
    pagination = true,
    size = 'normal',
    border = false,
    striped = false,
    actionButtons = false,
    renderActionButtons = () => {},
    itemsPerPage = 10,
    maxPageButtons = 5,
    exportOptions = {
        copy: true,
        csv: true,
        xlsx: true,
        pdf: true,
        print: true,
    },
}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const [tableData, setTableData] = useState([])
    const [sort, setSort] = useState({ accessor: '', ascending: true })

    const randonTableId = `table-${Math.floor(Math.random() * 1000000)}`

    useEffect(() => {
        if (data.length > 0) {
            setTableData(data)
        }
    }, [data])

    const handleSearch = (e) => {
        const { value } = e.target
        setSearchTerm(value)
        setCurrentPage(1)

        const filteredData = data.filter((row) =>
            columns.some((column) =>
                row[column.accessor]?.toString().toLowerCase().includes(value.toLowerCase()),
            ),
        )

        setTableData(filteredData)
    }

    const handleExport = (option) => {
        // Handle export based on the selected option
        switch (option) {
            case 'copy':
                // Handle copy export
                break
            case 'csv':
                // Handle csv export
                break
            case 'xlsx':
                // Handle xlsx export
                break
            case 'pdf':
                // Handle PDF export
                break
            case 'print':
                // Handle print export
                break
            default:
                break
        }
    }

    const handleSort = (accessor) => {
        setSort((prevSort) => ({
            accessor,
            ascending: prevSort.accessor === accessor ? !prevSort.ascending : true,
        }))

        setCurrentPage(1)

        const sortedData = [...tableData].sort((a, b) => {
            const valueA = a[accessor]
            const valueB = b[accessor]

            if (valueA === valueB) {
                return 0
            }

            return sort.ascending ? (valueA > valueB ? 1 : -1) : valueA > valueB ? -1 : 1
        })

        setTableData(sortedData)
    }

    const totalPages = Math.ceil(tableData.length / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    const currentData = tableData.slice(startIndex, endIndex)

    const calculatePageButtons = () => {
        const halfMaxButtons = Math.floor(maxPageButtons / 2)
        const totalPagesInRange = Math.min(maxPageButtons, totalPages)

        if (totalPages <= maxPageButtons) {
            return Array.from({ length: totalPages }, (_, index) => (
                <IconButton
                    key={index}
                    text={String(index + 1)}
                    onClick={() => setCurrentPage(index + 1)}
                    $active={currentPage === index + 1}
                />
            ))
        }

        let startPage = Math.max(currentPage - halfMaxButtons, 1)
        let endPage = startPage + totalPagesInRange - 1

        if (endPage > totalPages) {
            endPage = totalPages
            startPage = Math.max(endPage - totalPagesInRange + 1, 1)
        }

        const buttons = []
        if (startPage > 1) {
            buttons.push(
                <IconButton
                    key="ellipsis-start"
                    text="..."
                    onClick={() => setCurrentPage(Math.max(startPage - halfMaxButtons, 1))}
                />,
            )
        }

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <IconButton
                    key={i}
                    text={String(i)}
                    onClick={() => setCurrentPage(i)}
                    $active={currentPage === i}
                />,
            )
        }

        if (endPage < totalPages) {
            buttons.push(
                <IconButton
                    key="ellipsis-end"
                    text="..."
                    onClick={() => setCurrentPage(Math.min(endPage + 1, totalPages))}
                />,
            )
        }

        return buttons
    }

    return (
        columns.length > 0 && (
            <Container>
                {(searchable || exports) && (
                    <Header>
                        {searchable && (
                            <SearchInput
                                type="text"
                                placeholder="Search..."
                                variant="secondary"
                                value={searchTerm}
                                $border={border}
                                onChange={handleSearch}
                            />
                        )}
                        {exports && (
                            <ButtonGroup>
                                {exportOptions.copy && (
                                    <IconButton
                                        icon={images.icons.copy}
                                        title="Copy"
                                        onClick={() => handleExport('copy')}
                                    />
                                )}
                                {exportOptions.csv && (
                                    <IconButton
                                        icon={images.icons.csv}
                                        title="CSV"
                                        onClick={() => handleExport('csv')}
                                    />
                                )}
                                {exportOptions.xlsx && (
                                    <IconButton
                                        icon={images.icons.xlsx}
                                        title="XLSX"
                                        onClick={() => handleExport('xlsx')}
                                    />
                                )}
                                {exportOptions.pdf && (
                                    <IconButton
                                        icon={images.icons.pdf}
                                        title="PDF"
                                        onClick={() => handleExport('pdf')}
                                    />
                                )}
                                {exportOptions.print && (
                                    <IconButton
                                        icon={images.icons.print}
                                        title="Print"
                                        onClick={() => handleExport('print')}
                                    />
                                )}
                            </ButtonGroup>
                        )}
                    </Header>
                )}
                <TableContainer $border={border} $striped={striped} id={randonTableId}>
                    <TableHead $size={size}>
                        <TableRow $size={size}>
                            {columns.length > 0 &&
                                columns.map((column, i) => (
                                    <TableHeading
                                        key={column.accessor}
                                        onClick={() => handleSort(column.accessor)}
                                    >
                                        <TableHeadingContainer>
                                            {column.header}
                                            {sort.accessor === column.accessor && (
                                                <span>{sort.ascending ? ' ▲' : ' ▼'}</span>
                                            )}
                                        </TableHeadingContainer>
                                    </TableHeading>
                                ))}
                            {actionButtons && <TableHeading>Action</TableHeading>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentData.map((row, rowIndex) => (
                            <TableRow $size={size} key={rowIndex}>
                                {columns.map((column) => (
                                    <TableData key={column.accessor}>
                                        {row[column.accessor] !== undefined
                                            ? row[column.accessor]
                                            : ''}
                                    </TableData>
                                ))}
                                {actionButtons && <TableData>{renderActionButtons(row)}</TableData>}
                            </TableRow>
                        ))}
                        {currentData.length === 0 && (
                            <TableRow $size={size}>
                                <TableData
                                    colSpan={actionButtons ? columns.length + 1 : columns.length}
                                >
                                    <NoDataContainer>
                                        <NoDataImg src={images.no_data} alt="" />
                                        No data found
                                    </NoDataContainer>
                                </TableData>
                            </TableRow>
                        )}
                    </TableBody>
                    {pagination && (
                        <TabelFoot>
                            <TableRow>
                                <TableHeading
                                    colSpan={actionButtons ? columns.length + 1 : columns.length}
                                >
                                    {currentData.length !== 0 && (
                                        <PaginationContainer $size={size}>
                                            <ButtonGroup>
                                                <IconButton
                                                    icon={images.icons.arrow_left}
                                                    title="Previous"
                                                    onClick={() =>
                                                        setCurrentPage((prev) =>
                                                            Math.max(prev - 1, 1),
                                                        )
                                                    }
                                                    disabled={currentPage === 1}
                                                />
                                                {calculatePageButtons()}
                                                <IconButton
                                                    icon={images.icons.arrow_right}
                                                    title="Next"
                                                    onClick={() =>
                                                        setCurrentPage((prev) =>
                                                            Math.min(prev + 1, totalPages),
                                                        )
                                                    }
                                                    disabled={currentPage === totalPages}
                                                />
                                            </ButtonGroup>
                                        </PaginationContainer>
                                    )}
                                </TableHeading>
                            </TableRow>
                        </TabelFoot>
                    )}
                </TableContainer>
            </Container>
        )
    )
}

export default Table
