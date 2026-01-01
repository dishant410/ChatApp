import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {

    const [user, setUser] = useState({
        username: "",
        Password: "",
    });

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(user);
        setUser({
            username: "",
            Password: "",
        })
    }


    return (
        <div className="min-w-96 mx-auto">

            <div className="w-full p-6 rounded-lg shadow-md text-black bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form onSubmit={onSubmitHandler} action=" ">

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
                            value={user.Password}
                            onChange={(e) => setUser({ ...user, Password: e.target.value })}
                            className="w-full input input-bordered h-10 bg-white"
                            type="password"
                            placeholder="Password" />
                    </div>



                    <p className="text-center text-gray-800 my-2">Don't have an account? <Link to="/signup">Signup </Link></p>


                    <div>
                        <button type="submit" className="btn btn-block btn-sm mt-2 border border-slate-700  text-black bg-white">Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login;