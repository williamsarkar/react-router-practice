import { useLoaderData, useRouteLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const{id,title,body}=post;

    return (
        <div>
            <h2>post details about:{id}</h2>
            <p>title:{title}</p>
            <p>Body:{body}</p>
        </div>
    );
};

export default PostDetails;