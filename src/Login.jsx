import React, { useState } from 'react';
import Popup from './Popup';
// import useHistory, {Link} from 'use-history'
import DashboardLayout from './Dashboard/DashboardLayout';

function Login(){
  const url=("./Dashboard/DashboardLayout")
  // const {u rl}= useHistory();
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleOpenPopup = () => {
      setPopupOpen(true);
    };

    const handleClosePopup = () => {
      setPopupOpen(false);
    };

    return(
        <div className="flex items-center justify-center min-h-screen font-Nunito">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleOpenPopup}
        >
          Open Popup
        </button>

        {isPopupOpen && <Popup onClose={handleClosePopup} />}
      </div>
    )
}
export default Login
