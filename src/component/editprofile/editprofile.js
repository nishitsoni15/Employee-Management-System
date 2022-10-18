import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProfile = () => {

    const [profile, setProfile] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    })
    const [disableBtn, setDisableBtn] = useState(true);
    // const [issubmit, setIssubmit] = useState(false);
    const [errorval, setErrorval] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });

    const { name, username, email, phone } = profile;
    const navigate = useNavigate();
    const { id } = useParams();



    useEffect(() => {
        onEditProfile();
    }, [errorval])

    const onProfileChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
        const preValue = profile;
        const value = e.currentTarget.value;
        console.log(value);
        console.log("pre", preValue);

        if (value !== preValue) {
            setDisableBtn(false);
        }
    }

    // const onError = (e) => {
    //     const preValue = profile;
    //     const value = e.currentTarget.value;
    //     console.log(value);
    //     console.log("pre", preValue);
    //     const err = {}
    //     if (value !== preValue) {
    //         setDisableBtn(false);
    //     } else if (value.name === "") {
    //         err.name = "name is required";
    //         setDisableBtn(true);
    //     } else if (value.username === "") {
    //         err.username = "username is required";
    //         setDisableBtn(true);
    //     } else if (value.email === "") {
    //         err.email = "email is required";
    //         setDisableBtn(true);
    //     }
    //     else if (value === preValue) {
    //         setDisableBtn(true);
    //     }
    //     return err;
    // }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3002/users/${id}`, profile);
        navigate("/");
    }



    const onEditProfile = async () => {
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setProfile(result.data);
    }

    return (
        <>
            <div className="container p-5">
                <form onSubmit={e => onSubmit(e)}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" name="name" value={name} onChange={e => onProfileChange(e)}></input>
                        {errorval.name && <p>{errorval.name}</p>}
                    </div>
                    <div class="form-group mt-2">
                        <label for="exampleInputEmail1">User Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" name="username" value={username} onChange={e => onProfileChange(e)}></input>
                        {errorval.name && <p>{errorval.username}</p>}
                    </div>
                    <div class="form-group mt-2">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={e => onProfileChange(e)}></input>
                        {errorval.name && <p>{errorval.email}</p>}
                    </div>
                    <div class="form-group mt-2">
                        <label for="exampleInputPassword1">Phone</label>
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Phone" name="phone" value={phone} onChange={e => onProfileChange(e)}></input>
                    </div>


                    <button type="submit" class="btn btn-warning mt-2" disabled={disableBtn}>Update Profile</button>
                </form>
            </div>

        </>
    )
}

export default EditProfile;