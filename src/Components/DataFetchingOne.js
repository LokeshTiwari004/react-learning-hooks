import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default DataFetchingOne;
