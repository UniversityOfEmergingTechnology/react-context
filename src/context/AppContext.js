import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl'
// step 1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  //data filling pending
    async function fetchBlogPosts(page=1 , tag , category=null){
        setLoading(true);

        let url = `${baseUrl}?page=${page}`

        if(category){
            url += `&category=${category}`
        }
        if(tag){
            url += `&tag=${tag}`
        }
        try{
            const result = await fetch(url)
            const data =await result.json()
            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)
            console.log(data)
        }
        catch(err){
            console.log(err)
        }
        setLoading(false)
    }
    function handlePageChange(page){
        setPage(page)
        fetchBlogPosts(page);
    }

const value = {
  loading,
  setLoading,
  posts,
  setPosts,
  page,
  setPage,
  totalPages,
  setTotalPages,
  fetchBlogPosts,
  handlePageChange
};
// step 2

return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}