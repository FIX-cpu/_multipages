import { useRef } from 'react';
import Form from 'react-bootstrap/Form';


import { verifyUser } from '../../data/users';
import './Login.css';



function Login( {setToken, setRole} ) {
    const userRef = useRef();
    const passRef = useRef();
   
    return (
        <div className="login-container">
            <Form.Label htmlFor="username"><b>Username</b></Form.Label>
            <Form.Control
                type="text"
                id="username"
                placeholder='User'
                style={{textAlign: 'center'}}
                ref={userRef}
            />
            <Form.Label htmlFor="password"><b>Password</b></Form.Label>
            <Form.Control
                type="password"
                id="password"
                placeholder='Pass'
                style={{textAlign: 'center'}}
                ref={passRef}
            />
            <button className='btn btn-primary mt-3'onClick={() => {
                const user = userRef.current.value.trim()
                const pass = passRef.current.value.trim()
                userRef.current.value = ''
                passRef.current.value = ''
                const userInfo = verifyUser(user, pass)
                if (userInfo === null) {
                    alert('Wrong user or password')
                    userRef.current.focus()
                }
                else {
                    setToken(userInfo.token)
                    setRole(userInfo.role)
                }
            }}>Login</button>
        </div>);
}

export default Login;