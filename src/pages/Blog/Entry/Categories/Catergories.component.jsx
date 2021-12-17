import React from "react";

const Topic = (props) => {
  return (
    <a
      className="list-group-item list-group-item-action"
      id="list-profile-list"
      data-toggle="list"
      href="#list-profile"
      role="tab"
      aria-controls="profile"
    >
      {props.text}
    </a>
  );
};
export default Topic;
