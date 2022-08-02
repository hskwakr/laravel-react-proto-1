
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
    Card,
    Button,
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
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    table: {
        minWidth: 650,
      },
    tableHead: {
        backgroundColor: purple[100],
    },
}));

//ヘッダーのコンテンツ用の配列定義
const headerList = ['名前', 'タスク内容', '編集', '完了'];

const editBtn = <Button color="secondary" variant="contained">編集</Button>;
const deleteBtn = <Button color="primary" variant="contained">完了</Button>;
let rows = [
    {
        name: "モーリー",
        content: "肩トレ",
        edit: editBtn,
        delete: deleteBtn,
    },{
        name: "ドンキーコング",
        content: "バナナ補給",
        edit: editBtn,
        delete: deleteBtn,
    },
];

function Home() {
    //定義したスタイルを利用するための設定
    const classes = useStyles();

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>
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
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
