import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import'./user.css';

const Users = () => {

    const users = useLoaderData();
    console.log(users);

    return (
        <div>
            <h2>Users: {users.length}</h2>
            <div className="users">
                {
                    // users.map(user=><User key={user.id} user={user}></User>)
                    users.map(use=><User key={use.id} user={use}></User>)
                }
            </div>
        </div>
        
    );
};

export default Users;