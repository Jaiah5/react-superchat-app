
import React from "react";
import {auth} from "../firebase-config";


const SignOutButton = () => (

    <div className='sign-out'>
  <button onClick={auth.signOut}> Sign out</button>
  
  </div>

);

export default SignOutButton;
