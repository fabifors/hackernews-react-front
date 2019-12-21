import styled from "styled-components";

const LayoutElement = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? "row" : "column")};
  justify-content: flex-start;
  padding: 0 1.5rem;
`;

const Post = styled.div`
  padding: 0.5rem 0.75rem;
  background-color: #f2f3f4;
  margin-bottom: 0.75rem;
  span {
    font-size: 0.75em;
  }
`;

const PostTitle = styled.a`
  color: #1c1c5c;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.8em;
  margin: 0;
`;

const PostOrigin = styled.a`
  font-size: 0.75em;
  text-decoration: none;
  color: salmon;
  &:hover {
    text-decoration: underline;
  }
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const PostInfoString = styled.p`
  font-size: 0.7em;
  margin: 0;
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export { LayoutElement, PostInfo, PostTitle, PostOrigin, PostInfoString, Post };
