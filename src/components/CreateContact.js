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
        axios.post(`https://6241dbbd76c4fb91f67b85a7.mockapi.io/contact`, {
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
            <Form >
                <Form.Field className="create-contact-form">
                    <div className="label-div">
                        <label>Name</label>
                    </div>
                    <div className="input-div">
                        <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
                    </div>
                </Form.Field>
                <Form.Field>
                    <div className="label-div">
                        <label>Email</label>
                    </div>
                    <div className="input-div">
                        <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </Form.Field>
                <Form.Field>
                    <div className="label-div">
                        <label>Birthday</label>
                    </div>
                    <div className="input-div">
                        <input placeholder='Birthday' onChange={(e) => setBirthday(e.target.value)} />
                    </div>
                </Form.Field>
                <Form.Field>
                    <div className="label-div">
                        <label>ZIP Code</label>
                    </div>
                    <div className="input-div">
                        <input placeholder='ZIP Code' onChange={(e) => setZip(e.target.value)} />
                    </div>
                </Form.Field>
                <div className="label-div">
                    <Button onClick={postContact} type='submit'>Submit</Button>
                </div>
            </Form>
        </div >
    )
}