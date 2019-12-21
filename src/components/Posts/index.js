import React from "react";
import {
  LayoutElement,
  PostInfo,
  PostTitle,
  PostOrigin,
  PostInfoString,
  Post
} from "./styles";
import Loader from "../Loader";

const Posts = props => {
  return (
    <LayoutElement>
      {props.news && !props.loading ? (
        props.news.map(el => (
          <Post key={el.id}>
            <PostTitle href={el.link}>{el.title}</PostTitle>
            {el.from ? <span> ~ </span> : null}
            {el.from ? (
              <PostOrigin href={`https://${el.from}`} target="_blank">
                {el.from}
              </PostOrigin>
            ) : null}
            <PostInfo>
              <PostInfoString>
                {el.score} by <a href="/#">{el.author}</a> {el.age}
              </PostInfoString>
            </PostInfo>
          </Post>
        ))
      ) : (
        <Loader />
      )}
    </LayoutElement>
  );
};

export default Posts;
