import React, {useState} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

export const NewUserForm = (props) => {
    const initState = {
        firstName: '',
        lastName: '',
    }
    const [state, setState] = useState(initState);
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            firstName: state.firstName,
            lastName: state.lastName
        })
        setState({
            firstName: '',
            lastName: ''
        })
    }
    const handleFirstNameChange = (e) => {
        setState({
            firstName: e.target.value,
            lastName: state.lastName
        })
    }
    const handleLastNameChange = (e) => {
        setState({
            firstName: state.firstName,
            lastName: e.target.value
        })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>
                    First name
                </Label>
                <Input required placeholder='First Name' onChange={handleFirstNameChange} value={state.firstName}/>
            </FormGroup>
            <FormGroup>
                <Label>
                    Last name
                </Label>
                <Input required placeholder='Last Name' onChange={handleLastNameChange} value={state.lastName}/>
            </FormGroup>
            <FormGroup>
                <Button block outline type='submit' color='primary'>
                    Create
                </Button>
            </FormGroup>
        </Form>
    );
};

