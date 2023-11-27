import React from "react";
import "../popupNotification.css";

const PopupNotification = ({ message, setShowPopup, popupColor }) => {
  // Automatically hide the popup after a delay (e.g., 3 seconds)
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [setShowPopup]);

  return (
    <div className="popup-container">
      <div className={`popup-notification ${popupColor}`}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default PopupNotification;
