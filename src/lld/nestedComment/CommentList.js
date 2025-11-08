import React from "react";

const CommentList = ({ commentList }) => {
  return (
    <>
      <div>{commentList.title}</div>
      {commentList.comments && commentList.comments.length > 0 && (
        <div style={{ marginLeft: "15px" }}>
          {commentList?.comments?.map((comment) => (
            <CommentList commentList={comment} />
          ))}
        </div>
      )}
    </>
  );
};

export default CommentList;
