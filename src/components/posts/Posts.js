import React, { useState, useEffect } from "react";
import axios from "axios";
import "./posts.css";
import { Button } from "../styled-components/Button.styled";

const Posts = () => {
  const url = "https://dev.to/api/articles?username=muratcanyuksel";

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const req = await axios.get(url);
      const res = await req.data;
      setData(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect runs once when the component is mounted
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      Posts
      <div className="wrapper d-flex justify-content-center flex-wrap">
        {data.map((item) => {
          return (
            <div
              className="card d-flex flex-column justify-content-start align-items-end"
              key={item.id}
              style={{ background: item.cover_image }}
            >
              <div className="postTitle">{item.title}</div>
              <a href={item.url} target="_blank" rel="noreferrer">
                <Button
                  backgroundColor="white"
                  border="1px solid rgba(0,124,137,.3)"
                  borderHover="1px solid  #004e56"
                  color="#004e56"
                  fontSize="1rem"
                  height="3.2rem"
                  width="auto"
                >
                  <div style={{ fontSize: "0.9rem" }}>Read More</div>{" "}
                </Button>
              </a>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
