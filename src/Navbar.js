import { Link } from "react-router-dom";
const NAvbar = () => {
    return ( 
        <div>
            <div className="flex justify-between">
                <div className="font-Quicksand text-2xl font-extrabold text-pink-500">Icy Blogs</div>
                <div className="flex justify-between w-1/6">
                    <Link className="hover:text-pink-500" to="/">Home</Link>
                    <Link className="hover:text-pink-500" to="/create">New Blog</Link>
                </div>
            </div>
            <div className="bg-slate-200 w-full h-[1px] mt-5"></div>
        </div>
        
     );
}
 
export default NAvbar;