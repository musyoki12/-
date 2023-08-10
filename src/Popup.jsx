// Popup.js
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Signup from "./Signup"

import DashboardLayout from './Dashboard/DashboardLayout';
function Popup({ onClose }){
  const [isSingupVisible, setSignupVisible]=useState(false);

  // const toggleSignup=()=>{
  //   setSignupVisible(!isSingupVisible)
  // }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-Nunito">
      <div className="bg-white p-6 rounded shadow-lg">
        {/* <h2 className="text-xl font-semibold mb-4">Popup Content</h2> */}
        {/* Add any content you want in the popup */}
        <div>
            <h1>Already have an account?Log in</h1>
            <div className="flex items-centre justify-centre ">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                </div>
                <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        // onClick={toggleSignup}
        >Login to your account<Link to="/dashboardlayout"></Link></button>


       <div className="text-sm font-medium text-gray-500 dark:text-gray-300"> Not registered? <Link to="/dashboardLayout" className="text-blue-700 hover:underline dark:text-blue-500">
            Create account
          </Link>

        </div>
         {/* <Link to="/signup" className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Don't have an account? Sign up
        </Link> */}
    </form>
</div>
            </div>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
