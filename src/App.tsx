import React, { useEffect, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import RawJson from "./pages/RawJson";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import axios from "axios";

function App() {
  const [postData, setPostData] = useState<any>([]);
  const [selectedPage, setSelectedPage] = useState(1);
  let myInterval: any;
  let count: number = 0;

  const apiFetch = () => {
    console.log(count);
    const apiCall = async () => {
      const responce = await axios.get(
        ` http://hn.algolia.com/api/v1/search?query=bar&page=${count}`
      );
      // console.log(responce?.data);
      if (!responce?.data?.exhaustiveNbHits) {
        setPostData((prev: any) => [...prev, responce?.data?.hits]);
      } else {
        clearInterval(myInterval);
      }
    };
    apiCall();
    count = count + 1;
  };

  useEffect(() => {
    apiFetch();
    myInterval = setInterval(apiFetch, 10000);
  }, []);
  return (
    <div className="App">
      <Link className="headding" to="/">
        <h1>Post List App</h1>
      </Link>
      <Routes>
        <Route
          path="/"
          element={
            <PostList
              postData={postData}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></PostList>
          }
        ></Route>
        <Route path="rawdata" element={<RawJson></RawJson>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
