import React, {useState, useEffect} from 'react';
import axios from "axios";
export default function Photo() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    getPost();
  }, []);
  const getPost = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos', {
      params: { _limit: 10 },
    });
    setPost(res.data);
    console.log(res.data);
  };

  return (
    <div>
      router tutorial
      <div>
        여기는 사진 목록
        {post.map((post) => (
        <ul key={post.id}>
          <li>
            <h3>사진 제목 : {post.title}</h3>
            <img
              style={{ width: '200px', height: '200px' }}
              src={post.url}
              alt={post.alt}
            ></img>
          </li>
        </ul>
      ))}
    </div>
    </div>
  );
        }
