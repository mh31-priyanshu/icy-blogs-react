import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id} = useParams();
    const {data : blog, error, isPending} =  useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();
    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/'+id,{
            method:'DELETE'
        }).then(()=>{
            console.log("Post deleted.");
            history.push('/');
        })
    }

    return ( 
        <div>
            {isPending && <div className="ml-8 text-lg text-slate-600"> Loading... </div>}
            {error && <div className="ml-8 text-lg text-slate-600"> {error} </div>}
            {blog && (
                <div className="mt-10 ml-5">
                    <div className="text-2xl font-bold text-pink-500">{blog.title}</div>
                    <div className="text-slate-400 text-sm">Written by {blog.author}</div>
                    <div className="text-justify mt-5">{blog.data}</div>
                    <button onClick={handleDelete} className="mr-4 bg-pink-500 text-lg my-5 text-white px-4 py-1 rounded-md">Delete</button>

                </div>
            )}
        </div>
     );
}
 
export default BlogDetails;
