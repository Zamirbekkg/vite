import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Abount = () => {
    const { id } = useParams();
    console.log(id);
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <ul>
                {
                    users && (
                        <li key={users?.id}>
                            <ul>{users?.name}</ul>
                            <p>{users?.phone}</p>
                            <p>{users?.email}</p>
                            <p>{users?.website}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Abount;
