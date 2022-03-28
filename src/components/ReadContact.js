import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadContact() {
    const [contactAPIData, setContactAPIData] = useState([]);
    useEffect(() => {
        axios.get(``)
            .then((response) => {
                console.log(response.data)
                setContactAPIData(response.data);
            })
    }, []);

    const setContactData = (data) => {
        let { id, name, email, birthday, zip } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('birthday', birthday);
        localStorage.setItem('zip', zip);
    }

    const getContact = () => {
        axios.get(``)
            .then((getContact) => {
                contactAPIData(getContact.data);
            })
    }

    const deleteContact = (id) => {
        axios.delete(`/${id}`)
            .then(() => {
                getContact();
            })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Birthday</Table.HeaderCell>
                        <Table.HeaderCell>ZIP Code</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {contactAPIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.birthday}</Table.Cell>
                                <Table.Cell>{data.zip}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell>
                                        <Button onClick={() => setContactData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => deleteContact(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}