import { Link } from "react-router-dom";
import React from "react";

import "./new.css";

function NewThread() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    console.log("submit");
  }
  return (
    <div>
      <header>
        <p class="header_title">掲示板</p>
        <Link to="/threads/new" class="header_button">
          <u>スレッドを立てる</u>
        </Link>
      </header>

      <form class="thread_form" method="post" onSubmit={handleSubmit}>
        <h2>スレッド新規作成</h2>
        <label>
          <input name="thread_title" placeholder="スレッドタイトル"/>
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
