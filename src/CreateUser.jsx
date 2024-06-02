// Import necessary dependencies
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Define the CreateUser component
const CreateUser = () => {
    // Define state variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate= useNavigate()
    // Define the Submit function
    const Submit = (e) => {
        e.preventDefault();
        const payload = { name, email, age };

        axios.post("http://localhost:3001/createUser", payload)
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err));
    };

    // Render the form
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add New User</h2>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter Name"
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" className="form-control" placeholder="Enter Age"
                            onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success mt-2">Add</button>
                </form>
            </div>
        </div>
    );
};

// Export the component
export default CreateUser;
