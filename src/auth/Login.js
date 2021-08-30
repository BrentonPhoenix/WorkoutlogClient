import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const Login = (props) => {
    const [ username,setUsername ] = useState('')
    const [ password,setPassword ] = useState('')
    const [ email,setEmail ] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:4000/user/login', {
            method: 'POST',
            body: JSON.stringify({user: {
                username,
                password,
                email
            }}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then ((data) => {
            props.updateToken(data.sessionToken)
            // console.log(data)
        })
        .catch(e => console.log(e))
    }

    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type='text' onChange={(e)=> setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input  type="text" onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login