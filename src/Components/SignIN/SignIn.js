import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from "../Hero Section/Carousel";
import AuthService from "../Auth/auth.service";

function SignIn(learner) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('**Username is required'),
        password: Yup.string().required('**Password is required')
    });


    const onSubmit = async (data, e) => {
        console.log(JSON.stringify(data, null, 2))
        e.preventDefault();
        try {
            await AuthService.signin(username, password).then(
                () => {
                    if (learner) {
                        navigate('/home')   //learner home 
                    } else {
                        navigate('/educator')   //educator home
                    }
                    window.location.reload();
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });
    return (
        <div className=" max-w-[1250px] mx-auto overflow-hidden mt-11 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 m-3 pl-10 pr-5 h-fit shadow-lg shadow-purple-500 ">
            <div className="z-10 col-span-2 mt-4 mb-4 ">
                <Carousel />
            </div>

            <div className="w-full mt-4 max-w-80% flex justify-start items-center pt-2">
                <div className="w-full">
                    <form className="bg-white shadow-md rounded px-6 pt-6 pb-1 mb-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col items-center justify-center lg:justify-start">
                            <p className=" text-md mb-1 text-center text-purple-900 font-semibold">Sign in with</p>
                            <div className="flex">
                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-3 bg-purple-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-500 shadow-purple-300 hover:shadow-purple-900 hover:shadow-md focus:bg-purple-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-900 active:shadow-purple-900 transition duration-150 ease-in-out mx-1"
                                >
                                    <img className="w-4 h-4" src="https://ragsdalemartin.com/wp-content/uploads/2020/07/white-google-logo.png" alt="" />
                                </button>

                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-3 bg-purple-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-500 shadow-purple-300 hover:shadow-purple-900 hover:shadow-md focus:bg-purple-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-900 active:shadow-purple-900 transition duration-150 ease-in-out mx-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">

                                        <path
                                            fill="currentColor"
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                        />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-3 bg-purple-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-500 shadow-purple-300 hover:shadow-purple-900 hover:shadow-md focus:bg-purple-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-900 active:shadow-purple-900 transition duration-150 ease-in-out mx-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">

                                        <path
                                            fill="currentColor"
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div
                            className="flex items-center my-3 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p className="text-center font-semibold mx-4 mb-0">Or</p>
                        </div>

                        <div className=" mb-4">
                            <input
                                placeholder='username'
                                name="username"
                                type="text"
                                {...register('username')}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'is-invalid' : ''}`}
                            />
                            <div className="text-red-600 font-semibold">{errors.username?.message}</div>
                        </div>

                        <div className="mb-4">
                            <input
                                placeholder='Password'
                                name="password"
                                type="password"
                                {...register('password')}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'is-invalid' : ''}`}
                            />
                            <div className="text-red-600 font-semibold">{errors.password?.message}</div>
                        </div>

                        <div className='form-group'>
                            <button type='submit' className='btn bg-purple-900 text-white p-1 rounded-md shadow-md hover:bg-purple-500 hover:text-white hover:font-semibold shadow-purple-300 hover:shadow-purple-900 hover:shadow-md '>Sign In</button>
                        </div>
                        <Link className="inline-block align-baseline text-sm text-purple-500 hover:text-purple-900" to="/SignUp">
                            You don't have an account?{" "}Sign Up
                        </Link>
                    </form>

                </div>
            </div>

        </div>

    );
}

export default SignIn;