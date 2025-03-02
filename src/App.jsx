import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./App.css";
import NewThread from "./threads/new";

function App() {
  const [threads, setThreads] = useState();

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const threads = data.map((thread) => {
          return <button>{thread.title}</button>;
        });
        setThreads(threads);
      });
  }, []);
  return (
    <>
      <header>
        <p className="header_title">掲示板</p>
        <Link to="/threads/new" className="header_button">
          <u>スレッドを立てる</u>
        </Link>
      </header>
      <div className="thread_list">
        <h2>新着スレッド</h2>
        {threads}
      </div>
    </>
  );
}

export default App;
