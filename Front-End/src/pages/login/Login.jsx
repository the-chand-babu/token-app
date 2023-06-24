import React, { useState } from "react";
import style from "./Login.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import OtpInput from "otp-input-react";
import { toast } from "react-toastify";


import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
console.log(auth);

function Login() {
  const [phone, setPhone] = useState("");
const [otp,setOtp] = useState('')
  const [showOTP, setShowOTP] = useState(false);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },

        auth
      );
    }
  }

  function onSignup() {
    onCaptchVerify();
    alert(phone);
    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + phone;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;

        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {showOTP ? (
        <OtpInput
          value={otp}
          onChange={setOtp}
          OTPLength={6}
          otpType="number"
          disabled={false}
          autoFocus
          className="opt-container "
        ></OtpInput>
      ) : (
        <div className={style.login}>
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={setPhone}
            inputStyle={{ width: "80%" }}
            containerStyle={{ marginLeft: "30px" }}
          />
          <button onClick={onSignup}>Login</button>
        </div>
      )}
    </>
  );
}

export default Login;
