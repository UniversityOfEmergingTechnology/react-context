import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import PageState from '../components/PageState'
import { useNavigate , useLocation } from 'react-router-dom'
const CategoryPage = () => {
  const navigate = useNavigate()
  const location =useLocation()
  const category = location.pathname.split('/').at(-1)
  return (
    <div className="w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[100px] mb-[300px]">
      <Header />
      <div>
        <button
          className="border-2 border-gray-300 px-4 rounded-md"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <h2>
          Blogs which are tagged <span>#{category}</span>
        </h2>
      </div>

      <Blogs />
      <PageState />
    </div>
  )
}

export default CategoryPage