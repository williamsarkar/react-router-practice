import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div>
            <h2>NavBar</h2>
            <ul>
                
                <Link to="/">Home</Link>
                <Link to="/post">Post</Link>
                <Link to="/Users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>

            </ul>
            
        </div>
    );
};

export default Header;