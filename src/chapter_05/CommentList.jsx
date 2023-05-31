import React from "react";
import Comment from './Comment';

const comments = [
  {
    name: "홍길동",
    comment: "안녕하세요. 홍길동입니다.",
  },
  {
    name: "아이유",
    comment: "안녕하세요, 아이유 입니다.",
  },
  {
    name: "추사랑",
    comment: "안녕하세요.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment}/>
        );
      })}
    </div>
  );
}

export default CommentList;