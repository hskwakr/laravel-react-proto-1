import React from "react";
import axios from "axios";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Card, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import PostFrom from "../components/PostForm";
import MainTable from "../components/MainTable";
import { useNavigate } from "react-router-dom";

//スタイルの定義
const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            margin: theme.spacing(5),
            padding: theme.spacing(3),
        },
    })
);

//ヘッダーのコンテンツ用の配列定義
const headerList = ["名前", "タスク内容", "編集", "完了"];

function Home() {
    //定義したスタイルを利用するための設定
    const classes = useStyles();

    // postsの状態を管理する
    const navigation = useNavigate();

    // postsの状態を管理する
    const [posts, setPosts] = useState([]);

    // フォームの入力値を管理するステートの定義
    const [formData, setFormData] = useState({ name: "", content: "" });

    useEffect(() => {
        getPostsData();
    }, []);

    // 一覧情報を取得しステートpostsにセットする
    const getPostsData = () => {
        axios
            .get("/api/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch(() => {
                console.log("通信に失敗しました");
            });
    };

    // 入力がされたら（都度）入力値を変更するためのfunction
    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
    };

    // 新規登録
    const createPost = async () => {
        //空だと弾く
        if (formData == "") {
            return;
        }
        //入力値を投げる
        await axios
            .post("/api/post/create", {
                name: formData.name,
                content: formData.content,
            })
            .then((res) => {
                //戻り値をtodosにセット
                const tempPosts = posts;
                tempPosts.push(res.data);
                setPosts(tempPosts);

                // 画面遷移
                navigation("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deletePost = async (post) => {
        await axios
            .post("/api/delete", {
                id: post.id,
            })
            .then((res) => {
                setPosts(res.data);

                // 画面遷移
                navigation("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    let rows = [];
    posts.map((post) => {
        let editBtn = (
            <Button
                color="secondary"
                variant="contained"
                key={post.id}
                href={`/post/edit/${post.id}`}
            >
                編集
            </Button>
        );
        let deleteBtn = (
            <Button
                color="primary"
                variant="contained"
                onClick={() => deletePost(post)}
            >
                完了
            </Button>
        );

        rows.push({
            name: post.name,
            content: post.content,
            edit: editBtn,
            delete: deleteBtn,
        });
    });

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>
                            <PostFrom
                                data={formData}
                                inputChange={inputChange}
                                btnFunc={createPost}
                            />
                        </Card>
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
