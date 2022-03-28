import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function CreateContact() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [zip, setZip] = useState('');

    const postContact = () => {
        axios.post(``, {
            name,
            email,
            birthday,
            zip
        }).then(() => {
            history.push('/read');
        })
    }
    return (
        <div>
            <Form className="create-contact-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Birthday</label>
                    <input placeholder='Birthday' onChange={(e) => setBirthday(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>ZIP Code</label>
                    <input placeholder='ZIP Code' onChange={(e) => setZip(e.target.value)} />
                </Form.Field>
                <Button onClick={postContact} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}