import { useLoaderData } from "react-router-dom";
import Posts from "../Posts/Posts";



const Post = () => {
    
      const posts = useLoaderData();

    return (
        <div>
            <h2>Posts:{posts.length}</h2>
            <div className="user">
                {
                    posts.map(post=><Posts key={post.id} post={post}></Posts>)
                }
            </div>
        </div>
    );
};

export default Post;