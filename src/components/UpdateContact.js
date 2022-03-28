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
                    <Button type='submit' onClick={updateContactAPIData}>Update</Button>
                </div>
            </Form>
        </div>
    )
}