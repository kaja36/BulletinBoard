import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../header";
import "./posts.css";

function Posts() {
  const [posts, setPosts] = useState();
  const { thread_id } = useParams();

  useEffect(() => {
    fetch(
      "https://railway.bulletinboard.techtrain.dev/threads/" +
        thread_id +
        "/posts"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const posts = data.map((post) => {
          return (
            <div key={post.id}>
              <p>{post.post}</p>
            </div>
          );
        });
        setPosts(posts);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="postPage">
        <ul>
          <li>
            <h2>スレッドタイトル</h2>
          </li>
          <li>
            <div className="postsList">{posts}あ</div>
            <form className="postForm">
              <label>
                <textarea name="post" cols="20" rows="5" placeholder="投稿しよう！" />
              </label>
              <button type="submit">投稿</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Posts;
