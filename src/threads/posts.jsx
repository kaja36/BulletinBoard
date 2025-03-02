import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../header";

function Posts() {
  const [posts, setPosts] = useState();
  const { thread_id } = useParams();

  useEffect(() => {
    fetch(
      "https://railway.bulletinboard.techtrain.dev/threads/" +
        thread_id +
        "/posts"
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    }).then((data) => {
        const posts = data.map((post) => {
          return (
            <div key={post.id}>
              <p>{post.post}</p>
            </div>
          );
        }
      );
      setPosts(posts);
    });
  }, []);
  return (
    <div>
      <Header />
      {posts}
    </div>
  );
}

export default Posts;
