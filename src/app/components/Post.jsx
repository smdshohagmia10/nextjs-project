import React from "react";

const Post = ({post}) => {

const {title}=post
  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
        <div className="card-actions justify-end">
          <button className="btn">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
