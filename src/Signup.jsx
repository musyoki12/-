






import React,{useState} from "react";
import SignupPopup from "./SignupPopup"
function Signup() {
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

        {isPopupOpen && <SignupPopup onClose={handleClosePopup} />}
      </div>
  );
}

export default Signup;






