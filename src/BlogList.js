import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {
    return ( 
        <div>
            <div className="ml-8 text-2xl font-extrabold text-slate-500">{title}</div>
            {blogs.map((blog) => (
            <div className="m-5 p-5 hover:shadow-md hover:cursor-pointer border-l-8 rounded-md" key={blog.id}>
                <div className="flex items-end justify-between mb-2">
                    <Link to={`/blog/${blog.id}`}>
                        <div className="flex items-end">
                            <div className="text-xl font-bold text-pink-500">{blog.title}</div>
                            <div className="text-slate-400 text-sm ml-2">by {blog.author}</div>
                        </div>
                    </Link>
                    
                </div>
                <div className="mt-1">{blog.description}</div>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;