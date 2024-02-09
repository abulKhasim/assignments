import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleOnChange = (index, e) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === 4) {
      onOtpSubmit(combinedOtp);
    }

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOnClick = (index) => {
    inputRefs.current[index].setSelectionRange(1,1);
  };

  const handleKeyDown = (index, e) => {
    if(e.key === "Backspace") {
        inputRefs.current[index-1].focus();
    }
  };

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleOnChange(index, e)}
            onClick={() => handleOnClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput"
            ref={(input) => (inputRefs.current[index] = input)}
          ></input>
        );
      })}
    </div>
  );
};

export default OtpInput;
