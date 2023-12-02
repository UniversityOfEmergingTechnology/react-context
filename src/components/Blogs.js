import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[700px] h-screen py-8 flex flex-col gap-y-7 mt-[100px] mb-[300px] ">
      {/* if we are fetching data i need to show spinner else i need to show all blogs to the user */}
      {loading ? (
        <div className="w-11/12 max-w-[700px] h-screen py-8 flex flex-col gap-y-7 mt-[100px] mb-[300px] items-center justify-center">
          <Spinner />
        </div>
      ) : // if we are not having any blogs then just return no blogs found else show all blogs
      posts.length === 0 ? (
        <div className="mt-[100px] flex items-center justify-center">
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <BlogDetails key={post.id} post={post}></BlogDetails>
        ))
      )}
    </div>
  );
};

export default Blogs;
