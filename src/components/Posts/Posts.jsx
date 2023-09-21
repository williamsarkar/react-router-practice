import { Link, useNavigate } from "react-router-dom";


const Posts = ({post}) => {
    const {id, title}=post;

    const navigate = useNavigate; 

    const postStyle={
         border:'2pX solid black',
         padding:'5px',
         borderRadius:'10px'
    }

    const HandleShowDetails =()=>{
         navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h4>post od id:{id}</h4>
            <p>Title:{title}</p>
            <Link to={`/post/${id}`}>post details</Link>
            <button onClick={HandleShowDetails}>Show details</button>
        </div>
    );
};

export default Posts;