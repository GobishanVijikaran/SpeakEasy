import React, {useState} from 'react';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import Axios from 'axios'; 


function SignUpForm(props) {

    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")
    const [age, setAge] = useState('')
    const [email, setEmail] = useState("")
    const [interests, setInterest] = useState([])
    const [location, setLocation] = useState("")

    const onFnameChange = (event) => {
        setfName(event.currentTarget.value)
    }

    const onLnameChange = (event) => {
        setlName(event.currentTarget.value)
    }

    const onAgeChange = (event) => {
        setAge(event.currentTarget.value)
    }

    const onEmailChange = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onInterestChange = (event) => {
        setInterest(event.currentTarget.value)
    }

    const onLocationChange = (event) => {
        setLocation(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!fName || !lName || !age ||
            !email || !interests || !location) {
            return alert('Enter All the Values in the Form!')
        }

        const variables = {
            fname: fName,
            lname: lName,
            age: age,
            email: email,
            location: location,
            interests: interests,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })
    }

    return (
        <div style={{padding: '50px'}}>
            <Box fill align="center" justify="center">
                <Box width="medium">
                    <Form onSubmit={onSubmit}>
                        <FormField label='First Name'>
                            <TextInput onChange={onFnameChange} value={fName}/>
                        </FormField>
                        <FormField label='Last Name'>
                            <TextInput onChange={onLnameChange} value={lName}/>
                        </FormField>
                        <FormField label='Age'>
                            <TextInput onChange={onAgeChange} value={age}/>
                        </FormField>
                        <FormField label='Email'>
                            <TextInput onChange={onEmailChange} value={email}/>
                        </FormField>
                        <FormField label='Interests'>
                            <TextInput onChange={onInterestChange} value={interests}/>
                        </FormField>
                        <FormField label='Location'>
                            <TextInput onChange={onLocationChange} value={location}/>
                        </FormField>
                        <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                            <Button type="reset" label="Reset" />
                            <Button type="submit" label="Submit" primary onClick={onSubmit}/>
                        </Box>
                    </Form>
                </Box>
            </Box>
        </div>
    )
}

export default SignUpForm