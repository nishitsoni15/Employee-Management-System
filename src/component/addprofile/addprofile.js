import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProfile = () => {

    const [profile, setProfile] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });

    const [validation, setValidation] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });

    const [issubmit, setIssubmit] = useState(false);

    const checkValidation = (values) => {

        var error = {};

        if (!values.name) {
            error.name = "name is required!";
        }

        if (!values.username) {
            error.username = "username is required!";
        }

        const emailCondition = "[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

        if (!values.email) {
            error.email = "email is required!";
        } else if (!values.email.match(emailCondition)) {
            error.email = "Please input a valid email id";
        }

        const phoneCondition = "^[0-9]{9}";

        if (!values.phone) {
            error.phone = "phone is required!";
        }
        else if (!values.phone.match(phoneCondition)) {
            error.phone = "Please input a valid phone number";
        }

        return error;
    }

    useEffect(() => {
        console.log(validation);
        if (Object.keys(validation).length === 0 && issubmit) {
            console.log(profile);
        }
    }, [validation]);

    const { name, username, email, phone } = profile;
    const navigate = useNavigate();

    const onProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    }

    const onSubmit = (e) => {

        e.preventDefault();
        setValidation(checkValidation(profile));
        setIssubmit(true);
        if (Object.keys(validation).length === 0 && issubmit) {
            axios.post("http://localhost:3002/users", profile);
            navigate("/");
        }


    }



    return (
        <>
            <div className="container p-5">
                <form onSubmit={onSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" name="name" value={profile.name} onChange={onProfileChange}></input>
                        <p>{validation.name}</p>

                    </div>
                    <div class="form-group mt-2">
                        <label for="exampleInputEmail1">User Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" name="username" value={profile.username} onChange={onProfileChange}></input>
                        <p>{validation.username}</p>
                    </div>
                    <div class="form-group mt-2">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={profile.email} onChange={onProfileChange}></input>
                        <p>{validation.email}</p>
                    </div>
                    <div class="form-group mt-2">
                        <label for="exampleInputPassword1">Phone</label>
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Phone" name="phone" value={profile.phone} onChange={onProfileChange}></input>
                        <p>{validation.phone}</p>
                    </div>


                    <button type="submit" class="btn btn-primary mt-2">Add</button>
                </form>
            </div>

        </>
    )
}

export default AddProfile;