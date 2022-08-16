import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetchingTwoV2() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(id);

  const clickHandler = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={clickHandler}>
        Fetch Data
      </button>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default DataFetchingTwoV2;
