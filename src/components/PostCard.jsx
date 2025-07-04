import React from "react";
import dbService from "../appwrite/DataBaseService.js";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post${$id}`}>
      <div className="w-full bg-gray-100 round-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={dbService.getFilePreview(featuredImage)}
            alt={title}
            className="round-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
