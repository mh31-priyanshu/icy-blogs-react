import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    const {data : blogs, isPending, error} =  useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="mt-10">
            {error && <div className="ml-8 text-lg text-slate-600"> {error} </div>}
            {isPending && <div className="ml-8 text-lg text-slate-600"> Loading... </div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => (blog.author == 'Priyanshu'))} title="Priyanshu's Blogs"/>}
        </div>
     );
}
 
export default Home;
