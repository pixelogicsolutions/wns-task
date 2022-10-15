import * as React from "react";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import "./Table.css";
import { datatable } from "../../Data/WnsData";
import { CircularProgressbar, CircularProgressbarWithChildren,  buildStyles } from "react-circular-progressbar";


function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}


 

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  
  return (
      <div className="Table ">
      <h3>Short, medium, and long term growth</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Tittle</TableCell>
                <TableCell align="left">Value</TableCell>
                <TableCell align="left">CAGR1</TableCell>
                <TableCell align="left">CAGR5</TableCell>
                <TableCell align="left">CAGR10</TableCell>
                <TableCell align="left">CAGR20</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {datatable.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Tittle}
                  </TableCell>
                  <TableCell align="left">{row.Value}</TableCell>
                  <TableCell align="left">  <span className="status" style={makeStyle(row.CAGR1)}>{row.CAGR1}</span></TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.CAGR5)}>{row.CAGR5}</span>
                  </TableCell>
                  <TableCell align="left"><span className="status" style={makeStyle(row.CAGR10)}>{row.CAGR10}</span></TableCell>
                  <TableCell align="left"><span className="status" style={makeStyle(row.CAGR20)}>{row.CAGR20}</span></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
