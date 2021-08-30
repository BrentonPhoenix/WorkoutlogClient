import React, {useEffect, useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const WorkoutCreate = (props) =>{
    const [description, setDescription] = useState('')
    const [definition, setDefinition] = useState('')
    const [result, setResult] = useState('')
    // const [owner_id, setOwnerId] = useState("")

    const handleSubmit = (e) => {
       e.preventDefault()
        console.log(description)
        // setOwnerId(props.token.id)
        fetch('http://localhost:4000/log/', {
            method: 'POST',
            body: JSON.stringify({description: description,definition: definition,result: result}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then( (res) => res.json())
        .then( (logData) => {
            console.log(logData);
            setDescription('');
            setDefinition('');
            setResult("");
            // props.fetchWorkouts()
           
        })
        .catch( err => console.log(err))
    }

    // useEffect(() => {
    //     props.fetchWorkouts()
    // }, [])

    return(
        <>
            <h3>Log a Workout</h3>
            <Form >
                <FormGroup>
                   <Label htmlFor="description"/>
                   <Input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/> 
                </FormGroup>
            </Form>
            <Form>
                <FormGroup>
                    <Label htmlFor="definition">Definition</Label>
                    <Input type="select" name="definition" value={definition} onChange={(e) => setDefinition(e.target.value)}>
                        <option value="Time">Time</option>
                        <option value="Weight">Weight</option>
                        <option value="Distance">Distance</option>
                        </Input>
                </FormGroup>
            </Form>
            <Form>
                <FormGroup>
                    <Label htmlFor="result">Result</Label>
                    <Input type="text" name="result" value={result} onChange={(e) => setResult(e.target.value)}/>
                </FormGroup>
                <Button type="Submit" onClick={handleSubmit}>Click to Submit</Button>
            </Form>
        </>
    )
}

export default WorkoutCreate