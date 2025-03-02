import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
//import NewThread from "./threads/new";
import Header from "./header";

function App() {
  const [threads, setThreads] = useState();
  const navigate = useNavigate();

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
          return (
            <button key={thread.id} onClick={() => navigateToThread(thread)}>
              {thread.title}
            </button>
          );
        });
        setThreads(threads);
      });
  }, []);

  function navigateToThread(thread) {
    navigate(`/threads/${thread.id}`);
    console.log(thread.id);
  }

  return (
    <>
      <Header />
      <div className="thread_list">
        <h2>新着スレッド</h2>
        {threads}
      </div>
    </>
  );
}

export default App;
