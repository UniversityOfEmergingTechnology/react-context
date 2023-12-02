import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}/get-blog?blogId=${blogId}`;
    console.log(url);

    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);
  return (
    <div>
      <Header />
      <div className="w-11/12 max-w-[700px] h-screen py-8 flex flex-col gap-y-7 mt-[100px] mb-[300px]">
        <div>
          <button
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
        {loading ? (
          <Spinner />
        ) : blog ? (
          <div>
            <BlogDetails post={blog} />
            <h2 className="mt-[30px] mb-[30px] text-3xl">Related Blogs</h2>
            {relatedBlogs.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post}></BlogDetails>
              </div>
            ))}
          </div>
        ) : (
          <div>No Blog Found</div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
