import React, {useEffect, useState} from 'react'
import {
    Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow
} from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import API from "../../services/API"
import {Link} from "react-router-dom"

export default OffersTable

function OffersTable() {
    const rowsPerPageOptions = [5, 10, 25]
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [data, setData] = useState([])
    const handleUpdate = () => {
        API.get("/list").then((data) => {
            setData(data)
        })
    }

    useEffect(() => {
        handleUpdate()
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return <Paper sx={{width: '100%', overflow: 'hidden'}}>
        <Button onClick={handleUpdate} variant="contained">Обновить</Button>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Edit</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <Button component={Link} to={"/edit?id=" + row.id} variant="contained">
                                    <EditIcon/>
                                </Button>
                            </TableCell>
                            <TableCell>{row.productName}</TableCell>
                            <TableCell>{row.productNumber}</TableCell>
                        </TableRow>))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    </Paper>
}