import { React, useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPostsData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    };
    getPostsData();
  }, []);
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {posts.map((postsData) => {
            const { id } = postsData;
            return <Card key={id} {...postsData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
