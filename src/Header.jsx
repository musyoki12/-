import React from 'react';

function Header({ onLoginClick, onSignupClick }) {
  return (
    <div className="header flex justify-between md:justify-end">
      {/* Buttons on the left for small devices */}
      <ul className="hidden md:flex space-x-4">
        <li>
          <button
            className="btn-login bg-blue-500 text-white px-3 h-9 mt-2 mb-1 py-2"
            onClick={onLoginClick}
          >
            Login
          </button>
        </li>
        <li>
          <button
            className="btn-signup bg-blue-500 text-white px-3 h-9 mt-2 mb-1 py-2"
            onClick={onSignupClick}
          >
            Sign Up
          </button>
        </li>
      </ul>

      {/* Buttons on the right for medium and larger devices */}
      <ul className="md:hidden flex space-x-4">
        <li>
          <button
            className="btn-login bg-blue-500 text-white px-3 h-9 mt-2 mb-1 py-2"
            onClick={onLoginClick}
          >
            Login
          </button>
        </li>
        <li>
          <button
            className="btn-signup bg-blue-500 text-white px-3 h-9 mt-2 mb-1 py-2"
            onClick={onSignupClick}
          >
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
