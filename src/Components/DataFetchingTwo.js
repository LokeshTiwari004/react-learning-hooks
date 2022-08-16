import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetchingTwo() {
  const [post, setPost] = useState({});

  const fetchData = () => {
    const id = document.getElementById("id").value;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const button = document.getElementById('fetchPost');
    button.addEventListener('click', fetchData);
    return () => {
      button.removeEventListener('click', fetchData);
    }
  }, [])

  return (
    <div>
      <input type="text" id="id"/>
      <button id="fetchPost">Fetch Post</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default DataFetchingTwo;
