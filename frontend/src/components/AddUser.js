import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [gender, setGender] = useState("Male");
const navigate = useNavigate();

const saveUser = async (e)  =>{
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users',{
            name,
            email,
            gender
        });
        navigate('/');
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div className='container text-align mt-5'>
      <div className='row justify-content-center'>
        <div className='col-6'>
            <form onSubmit={saveUser}>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input type="text" className='form-control' 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    placeholder='Name'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input type="text" className='form-control'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder='Email'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Gender</label>
                    <div className='input-group mb-3'>
                        <select className='form-select'
                        value={gender}
                        onChange={(e)=> setGender(e.target.value)}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn btn-success'>Save</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddUser
