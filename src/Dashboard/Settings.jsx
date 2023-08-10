import React, { useState } from 'react';

const Settings = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform API calls to update user settings
    console.log('Settings updated:', { name, email, phone, password, profilePicture });
  };

  return (
    <div className='font-Nunito flex'>
        <div className='flex text-centre justify-centre '>
      <h1 className="text-2xl font-bold mb-4 text-centre">Account Settings</h1>
    </div>
    <div className="max-w-lg mx-auto p-4 flex justify-centre">
        
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full border rounded px-3 py-2"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="profilePicture" className="block font-medium mb-1">
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
    </div>
  );
};

export default Settings;
