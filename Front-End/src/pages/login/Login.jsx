import React, { useState } from "react";
import style from "./Login.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import firebase from "./firebase.config";
import OtpInput from "otp-input-react";

function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(true);
  const [toast, setToast] = useState(false);

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit();
          console.log("Recaptca varified");
        },
        defaultCountry: "IN",
      }
    );
  };

  const handleClick = () => {
    configureCaptcha();
    const phoneNumber = "+" + phone;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        setShowOTP(true);
      })
      .catch((error) => {
        console.log("SMS not sent");
      });
  };

  const handleOtpSubmit = () => {
    const code = otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(JSON.stringify(user));

        setShowOTP(false);
      })
      .catch((error) => {});
  };

  return (
    <>
      <h1>Login</h1>
      {showOTP ? (
        <div className={style.otp}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            OTPLength={6}
            otpType="number"
            disabled={false}
            autoFocus
            className="opt-container"
          ></OtpInput>
          <button onClick={handleOtpSubmit}>submit otp</button>
        </div>
      ) : (
        <div className={style.login}>
          <div id="sign-in-button"></div>
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={setPhone}
            inputStyle={{ width: "80%" }}
            containerStyle={{ marginLeft: "30px" }}
          />
          <button onClick={handleClick}>Login</button>
        </div>
      )}
    </>
  );
}

export default Login;
