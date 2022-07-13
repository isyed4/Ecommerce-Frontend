import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import {connect} from 'react-redux';
import { verify } from '../actions/auth';




const Activate = ({ verify }) => {

  const [verified, setVerified] = useState(false);   
  const params = useParams();
  

    const verify_account = (event) => {
       const uid = params.uid
       const token = params.token

      verify(uid, token);
      setVerified(true)
    };

    // Is the user authenticated?
    // Redirect them to the home page
    if (verified) {
        return <Navigate to='/'/>
    }

    return(
        <div className="container">
            <div 
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ marginTop: '200px' }}
            >
              <h1>Verify Your Account:</h1>
              <button
                onClick={verify_account}
                style = {{marginTop: '50px'}}
                type = 'button'
                className = 'btn btn-primary'
              >
                Verify
              </button>

            </div>
        </div>
    )
}



export default connect(null, { verify })(Activate);

