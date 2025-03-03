import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../header";
import "./posts.css";

function Posts() {
  const [posts, setPosts] = useState();
  const { thread_id } = useParams();
  const location = useLocation();
  const { thread } = location.state || {};

  const [postData, setPostData] = useState();

  useEffect(() => {
    fetchPosts();
  }, []);

  function fetchPosts() {
    fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const posts = data.posts.map((post) => {
          return (
            <li key={post.id} className="post">
              <p>{post.post}</p>
            </li>
          );
        });
        setPosts(posts);
      });
  }

  function handlePosting(e) {
    e.preventDefault();
    axios
      .post(
        `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`,
        { post: postData }
      )
      .then(() => {
        fetchPosts();
        setPostData("");
      })
      .catch((error) => {
        console.error("postingError", error);
      });
  }

  return (
    <div>
      <Header />
      <div className="postPage">
        <ul>
          <li>
            <h2>{thread}</h2>
          </li>
          <li>
            <ol className="postsList">{posts}</ol>
            <form className="postForm" method="post" onSubmit={handlePosting}>
              <label>
                <textarea
                  name="post"
                  cols="20"
                  rows="5"
                  placeholder="投稿しよう！"
                  onChange={(e) => setPostData(e.target.value)}
                  value={postData}
                />
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
