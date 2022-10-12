import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userLoad();
    }, [])

    const userLoad = async () => {
        const result = await axios.get("http://localhost:3002/users");
        setUsers(result.data);
    }

    const deleteProfile = async id => {
        await axios.delete(`http://localhost:3002/users/${id}`);
        userLoad();
    }

    return (
        <>
            <div className='container'>
                <div className='py-4'>
                    <h1>Home page</h1>
                    <table class="table table-striped border shadow">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((value, index) => (
                                    <tr>
                                        <td scope='row'>{index + 1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.username}</td>
                                        <td>{value.email}</td>
                                        <td>
                                            <Link className="btn btn-primary me-2" to={`/profile/edit/${value.id}`}>Edit</Link>
                                            <Link className="btn btn-danger" onClick={() => deleteProfile(value.id)}>Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Home;