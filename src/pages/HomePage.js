import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import PageState from '../components/PageState'
const HomePage = () => {
  return (
    <div className='flex flex-col items-center gap-y-1 justify-center w-full h-full'>
        <Header/>    
        <Blogs/>
        <PageState/>
    </div>
  )
}

export default HomePage