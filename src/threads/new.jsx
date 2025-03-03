import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";

import "./new.css";
import Header from "../header";

function NewThread() {
  const [threadTitle, setThreadTitle] = useState("");
  const navigate = useNavigate(); //必要

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    console.log("submit");

    axios
      .post("https://railway.bulletinboard.techtrain.dev/threads", {
        title: threadTitle,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error creating the thread!", error);
      });
  }
  return (
    <div>
      <Header />
      <form className="thread_form" method="post" onSubmit={handleSubmit}>
        <h2>スレッド新規作成</h2>
        <label>
          <input
            name="thread_title"
            placeholder="スレッドタイトル"
            value={threadTitle}
            onChange={(e) => setThreadTitle(e.target.value)}
          />
        </label>
        <div className="actions">
          <Link to="/">
            <u>Topに戻る</u>
          </Link>
          <button type="submit">作成</button>
        </div>
      </form>
    </div>
  );
}

export default NewThread;
