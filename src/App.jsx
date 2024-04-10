import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react"
import app from "./firebase";


const App = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const handelGoogle = () => {
        signInWithPopup(auth, provider).then((data) => {
            console.log(data);
        });
    }

    const handelSignout = () => {
        signOut(auth, provider).then((data) => {
            console.log(data);
        });
    }


    return (
    
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl text-sky-700 font-semibold my-3'>Sign-In Form</h1>
            <form  className="bg-gray-50 w-4/12 mx-auto mb-10 p-5 rounded shadow-lg border border-sky-600" >
            <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handelGoogle}>Google Sign-in</button>
                
            </form>
            

       

        </div>
    )
}

export default App