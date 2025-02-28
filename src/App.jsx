import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
        <p class="header_title">掲示板</p>
        <a class="header_button">
          <u>スレッドを立てる</u>
        </a>
      </header>
      <div class="thread_list">
        <h2>新着スレッド</h2>
        {threads}
      </div>
    </>
  );
}

export default App;
