import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="mt-10 ml-10">
            <div className="text-4xl font-extrabold">Sorry</div>
            <div>That page cannot be found</div>
            <Link to='/'><div className="underline">Back to the home page...</div></Link>
        </div>
     );
}
 
export default NotFound;