import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName:"",
    lastName:"",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid,setValid] = useState(false);

  const handleFirstName = (e) => {
    setValues({...values,firstName:e.target.value})
  }

  const handleLastName = (e) => {
    setValues({...values,lastName:e.target.value})
  }

  const handleEmail = (e) => {
    setValues({...values,email:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true)
    }
    setSubmitted(true)
  }
  return (
    <div className="App">
       <form className="register-form" onSubmit={handleSubmit}>
        {submitted ? <div className="message">Nice!Thank you for registering!
        </div> : null}
        <input value={values.firstName} className="form-field"
        placeholder="First Name"
        name="firstName" type="text"  onChange={handleFirstName}/>
        {submitted && !values.firstName ? <span>Empty</span> : null}
        <input value={values.lastName} className="form-field"
        placeholder="Last Name"
        name="lastName" type="text"  onChange={handleLastName}/>
        {submitted && !values.lastName ? <span>Empty</span> : null}
        <input value={values.email} className="form-field"
        placeholder="Email"
        name="email" type="text"  onChange={handleEmail}/>
        {submitted && !values.email ? <span>Empty</span> : null}
        <button className="form-field" type="submit">
          Login
        </button>
       </form>
    </div>
  );
}

export default App;
