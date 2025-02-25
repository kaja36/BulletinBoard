import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  const [threads, setThreads] = useState();

  useEffect(() => {
  fetch("https://railway.bulletinboard.techtrain.dev/threads")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    }).then((data) => {
      const threads = data.map((thread) => {
        return <p class ="threadTitle">{thread.title}</p>
      })
      setThreads(threads);
    });
  },[]);

  return (
    <>
    <header>掲示板</header>
      <h2>スレッド一覧</h2>
      <hr></hr>
      {threads}
    </>
  )
}

export default App
