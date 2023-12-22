import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('Start of the Journey');
    const [body,setBody] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
    const [author,setAuthor] = useState('Priyanshu');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, data:body, author, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."};

        fetch('http://192.168.1.5:8000/blogs',{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("New Blog Posted");
            history.push('/');
        })
        
    }

    return ( 
        <div className="ml-8 mt-10 flex justify-evenly">
            <div className="flex-1">
                <div className="text-2xl font-extrabold text-pink-500">Add New Blog</div>
                <form onSubmit={handleSubmit} className="w-5/6 mt-8">
                    <label className="text-lg">Blog Title :</label>
                    <input 
                        className="w-full border-2 my-1 mb-3 p-1" 
                        type="text" 
                        required
                        value={title}
                        onChange={(e)=>{setTitle(e.target.value)}}
                    />
                    <label className="text-lg">Blog Body :</label>
                    <textarea 
                        className="w-full border-2 my-1 mb-3 p-1 h-32" 
                        type="text"
                        required
                        value={body}
                        onChange={(e)=>{setBody(e.target.value)}} 
                    />
                    <label className="text-lg">Blog Author :</label>
                    <select 
                        className="w-full border-2 my-1 mb-3 p-1"
                        required
                        value={author}
                        onChange={(e)=>{setAuthor(e.target.value)}}
                        >
                        <option value="Priyanshu">Priyanshu</option>
                        <option value="Manthan">Manthan</option>
                        <option value="Pratyay">Pratyay</option>
                    </select>
                    {!isPending && <button className="mr-4 mt-3 bg-pink-500 text-lg text-white px-6 py-1 rounded-md">Post</button>}
                    {isPending && <button disabled className="mr-4 mt-3 bg-pink-500 text-lg text-white px-6 py-1 rounded-md">Posting</button>}
                </form>
            </div>
            <div className="flex-1">
                <div className="text-2xl font-extrabold text-pink-500">Preview</div>
                <div className="mt-10 ml-5">
                    <div className="text-2xl font-bold text-pink-500">{title}</div>
                    <div className="text-slate-400 text-sm">Written by {author}</div>
                    <div className="text-justify mt-5">{body}</div>

                </div>
            </div>
        </div>
     );
}
 
export default Create;