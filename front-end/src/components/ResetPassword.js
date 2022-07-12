import { useState } from "react";
import { Navigate } from "react-router-dom";
import {connect} from 'react-redux';
import { reset_password } from '../actions/auth';



const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    })

    const { email } = formData;

    const onChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const onSubmit = (event) => {
        event.preventDefault()

        reset_password(email);
        setRequestSent(true);
    };

    // Is the user authenticated?
    // Redirect them to the home page
    if (requestSent) {
        return <Navigate to='/'/>
    }

    return(
        <div className="container mt-5">
            <h1>Request Password Reset:</h1>
            <form onSubmit={e => onSubmit(e)}>
                 <div className="form-group">
                     <input 
                     className="form-control"
                     type="email" 
                     placeholder="Email"
                     name="email"
                     value={email}
                     onChange={e => onChange(e)}
                     required
                     />
                </div>
                <button className='btn btn-primary' type="submit">Reset Password</button>
            </form>
        </div>
    )
}


export default connect(null, { reset_password })(ResetPassword);
