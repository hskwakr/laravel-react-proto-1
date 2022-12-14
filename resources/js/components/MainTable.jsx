
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

//スタイルの定義
const useStyles = makeStyles((theme) => createStyles({
    table: {
        minWidth: 650,
      },
    tableHead: {
        backgroundColor: purple[100],
    },
}));


function MainTable(props) {
    const classes = useStyles();
    const {headerList, rows} = props;
    
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        {headerList.map((item, index) => (
                            <TableCell align="center" key={index}>{item}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            {Object.keys(row).map(function(key, i) {
                                return(
                                    <TableCell align="center" key={i}>{row[key]}</TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MainTable;
