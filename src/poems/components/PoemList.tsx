import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

type PoemElement = {
  url: string,
  id: string,
  date: string,
  title: string,
  description: string
}

type Props = {
  display: any
}

const List = (props: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Lp.</TableCell>
          <TableCell>Tytuł</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Opis</TableCell>
          <TableCell>Czytaj Online</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.display.sort().map((poem: PoemElement) => (
            <TableRow
            key={poem["id"]}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">{poem["id"]}</TableCell>
            <TableCell>{poem["title"]}</TableCell>
            <TableCell>{poem["date"]}</TableCell>
            <TableCell>{poem["description"]}</TableCell>
            <TableCell>
            <Link to={poem["url"] ? "/poems/"+ poem["url"] : "none"}>
              <Button style={{margin:"5px"}} variant="outlined">{poem["title"]}</Button>
            </Link>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List