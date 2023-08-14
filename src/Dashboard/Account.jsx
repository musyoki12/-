
import React,{useState} from 'react';
import prof from "./profi2.jpeg"
import Security from './Security';
import Settings from './Settings';
import { Link } from 'react-router-dom';


const Account = () => {
    const [activeTab, setActiveTab] = useState('profile'); // 'profile', 'security', or 'settings'

    const handleTabClick = (tab) => {
      setActiveTab(tab);

    }
    const profile = '<div>'
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <div className="flex">
        {/* <div className="w-1/3 mr-4">
          <img
            src="profile-picture.jpg" // Replace with actual image source
            alt="Profile"
            className="rounded-full w-40 h-40 object-cover"
          />
        </div> */}
         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-6">
            <a href="#"><img className="rounded-t-lg" src={prof} alt="" />         </a>
{/*          <div className="p-5">
            <a href="#">
                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My Profile</h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Username @kanzedm <br/>Email:kanze@info.com</p>
         </div> */}
        </div>
        <div className="w-2/3">
          <p className="text-xl font-semibold">John Doe</p>
          <p>Email: john@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Location: City, Country</p>
        </div>
      </div>
      <div className="mt-6">
        <ul className="flex border-b">
          <li
        className={`mr-6 pb-2 border-b-2 ${
          activeTab === 'profile' ? 'border-blue-500' : ''
        }`}
      >
        <a
          href="#profile"
          className={`${
            activeTab === 'profile' ? 'text-blue-500 font-semibold' : ''
          }`}
          onClick={() => handleTabClick('profile')}
        >
          Profile
        </a>
      </li>
      <li className="mr-6 pb-2">
      <Link
  to="/security"
  className={`${
    activeTab === 'settings' ? 'text-blue-500 font-semibold' : 'text-gray-600 hover:text-blue-500'
  }`}
  onClick={() => handleTabClick('settings')}
>
  Security
</Link>
      </li>
      <li className="mr-6 pb-2">
      <Link
  to="/settings"
  className={`${
    activeTab === 'settings' ? 'text-blue-500 font-semibold' : 'text-gray-600 hover:text-blue-500'
  }`}
  onClick={() => handleTabClick('settings')}
>
  Settings
</Link>

      </li>
      </ul>
      </div>
    </div>
  );
};

export default Account;



