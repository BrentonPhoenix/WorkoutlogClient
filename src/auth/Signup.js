import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const Signup = (props) => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:4000/user/register", {
            method: 'POST',
            body: JSON.stringify({user: {email, username,password}}),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
        .then(
            (response) => response.json()
        ).then ((data) => {
            props.updateToken(data.sessionToken)
        })
        .catch(e=> console.log(e))
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type='text' onChange={(e)=> setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                    {username === "" ? 'Username is Required' : null}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
            
                <Button type="submit" >Sign Up!</Button>
            </Form>
        </div>
    )
}

export default Signup