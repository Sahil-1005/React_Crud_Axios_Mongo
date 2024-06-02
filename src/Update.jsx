import React, { useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
const Update = () => {
    const {id}=useParams()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate= useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result=>{console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err=> console.log(err))
    },[])
    const Update=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id, {name,email,age})
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update User</h2>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="Name" className="form-control" id="Name" aria-describedby="Name" placeholder="Enter Name" 
                        value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="Age" className="form-control" id="Age" aria-describedby="Age" placeholder="Enter Age"
                        value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success mt-2">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update
