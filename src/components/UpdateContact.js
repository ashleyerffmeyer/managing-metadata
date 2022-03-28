import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function UpdateContact() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [zip, setZip] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setEmail(localStorage.getItem('Email'));
        setBirthday(localStorage.getItem('Birthday'));
        setZip(localStorage.getItem('ZIP Code'));

    }, []);

    const updateContactAPIData = () => {
        axios.put(`https://6241dbbd76c4fb91f67b85a7.mockapi.io/contact/${id}`, {
            name,
            email,
            birthday,
            zip
        }).then(() => {
            history.push('/read')
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
                <Button type='submit' onClick={updateContactAPIData}>Update</Button>
            </Form>
        </div>
    )
}