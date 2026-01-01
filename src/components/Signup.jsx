import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const handleCheckbox = (gender) => {
        setUser({ ...user, gender });
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
          
            const res = await axios.post(`http://localhost:8080/api/v1/user/register`, user, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
          console.log(res);

        } catch (error) {
            console.log(error);
        }
        setUser({
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            gender: "",
        })
    }
    return (
        <div className="min-w-96 mx-auto">

            <div className="w-full p-6 rounded-lg shadow-md text-black bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
                <h1 className="text-3xl font-bold text-center">Signup</h1>
                <form onSubmit={onSubmitHandler} action=" ">
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input
                            value={user.fullName}
                            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                            className="w-full input input-bordered h-10 bg-white"
                            type="text"
                            placeholder="Full Name" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            className="w-full input input-bordered h-10 bg-white"
                            type="text"
                            placeholder="Username" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            className="w-full input input-bordered h-10 bg-white"
                            type="password"
                            placeholder="Password" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input
                            value={user.confirmPassword}
                            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                            className="w-full input input-bordered h-10 bg-white"
                            type="password"
                            placeholder="Confirm Password" />
                    </div>
                    <div className="flex items-center ">
                        <div className="flex items-center text-gray-800">
                            <p>Male</p>
                            <input
                                type="checkbox"
                                checked={user.gender === "male"}
                                onChange={() => handleCheckbox("male")}
                                defaultChecked
                                className="checkbox mx-2" />
                        </div>
                        <div className="flex items-center text-gray-800">
                            <p>Female</p>
                            <input
                                type="checkbox"
                                checked={user.gender === "female"}
                                onChange={() => handleCheckbox("female")}
                                defaultChecked
                                className="checkbox mx-2" />
                        </div>

                    </div>

                    <p className="text-center my-2 text-gray-800 ">Already have an account? <Link to="/login">Login </Link></p>


                    <div>
                        <button type="submit" className="btn btn-block btn-sm mt-2 border border-slate-700  text-black bg-white ">Signup</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup;