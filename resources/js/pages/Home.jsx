import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
    Card,
    Button,
} from '@material-ui/core';
import MainTable from '../components/MainTable';
import axios from 'axios';
import { useState, useEffect } from 'react';

//スタイルの定義
const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
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

    // postsの状態を管理する
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsData();
    },[])

    //一覧情報を取得しステートpostsにセットする
    const getPostsData = () => {
        axios
            .get('/api/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>
                            <MainTable headerList={headerList} rows={rows} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
