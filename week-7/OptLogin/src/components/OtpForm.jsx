import React, { useState } from "react";
import OtpInput from "./OtpInput";

const OtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    setShowOtp(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login ");
  }

  return (
    <div>
      {!showOtp ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
            <h1>Enter OTP</h1>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
      )}
    </div>
  );
};

export default OtpForm;
