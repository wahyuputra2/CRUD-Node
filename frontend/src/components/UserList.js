import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const UserList = () => {
const [users, setUser] = useState([]);

useEffect(() => {
    getUsers();
}, []);

const getUsers = async () =>{
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
};

const deleteUser = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/users/${id}`);
        getUsers();
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className='container text-align mt-5'>
        <div className='row justify-content-center'>
            <div className='col-9'>
                <Link to={`add`} className='btn btn-success'>Add New</Link>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                    <tr key={user.id}>
                         <td>{index + 1}</td>
                         <td>{user.name}</td>
                         <td>{user.email}</td>
                         <td>{user.gender}</td>
                         <td>
                            <Link 
                            to={`edit/${user.id}`} 
                            className='btn btn-primary btn-sm'>edit</Link>
                            <button
                            onClick={()=> deleteUser(user.id)}
                            className='btn btn-danger btn-sm'>delete</button>
                         </td>
                     </tr>
                    ))}
                   
                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}

export default UserList
