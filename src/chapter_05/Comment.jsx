import React from "react";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "row",
    margin: 0,
    padding: 0,
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContaioner: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    display: "flex",
    marginLeft: 8,
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div>
      <div style={styles.wrapper}>
        <div style={styles.imageContaioner}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" style={styles.image} />
        </div>
        <div style={styles.contentContainer}>
          <span style={styles.nameText}>{props.name}</span>
          <span style={styles.commentText}>{props.comment}</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;