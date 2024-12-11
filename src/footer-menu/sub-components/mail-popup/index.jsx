/*
* (c) Copyright Ascensio System SIA 2024
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import React, { useState } from "react";
import "./mail-popup.scss";

const MailPopup = ({ t, locale, popupIsOpen, setPopupIsOpen, mailApiUrl, mailApiType }) => {
  const [formComplete, setFormComplete] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validFirstName, setValidFirstName] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState(t("Email is empty"));
  const [isLoading, setIsLoading] = useState(false);

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const nameIsValid = (name) => {
    return name.length > 0;
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    setValidEmail(emailIsValid(e.target.value));
  };

  const handleNameInput = (e) => {
    const name = e.target.value;
    setFirstName(name);
    setValidFirstName(nameIsValid(name));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setEmailError(!validEmail);
    setFirstNameError(!validFirstName);

    if (!firstName) {
      setFirstNameError(true);
    };

    if (!email) {
      setEmailError(true);
    };

    setEmailErrorText(email.length === 0 ? t("Email is empty") : t("Email is incorrect"));

    if (validFirstName && validEmail) {
      setIsLoading(true);

      try {
        const response = await fetch(mailApiUrl, {
          method: "POST",
          body: JSON.stringify({
            firstname: firstName,
            email: email,
            type: mailApiType
          })
        });
        
        if (response.status === 200) {
          setFormComplete(true);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Subscription failed", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCloseForm = () => {
    if (formComplete === true) {
      setFormComplete(false);
    };

    setValidEmail(false);
    setValidFirstName(false);
    setPopupIsOpen(false); 
    setEmail("");
    setFirstName("");
    setEmailError(false);
    setFirstNameError(false);
  };

  return (
    <div onClick={() => handleCloseForm()} className={`oo-fm-mail-popup ${popupIsOpen ? "show" : ""}`}>
      <div className="oo-fm-mail-popup-container">
        <div className="oo-fm-mail-popup-wrapper">
          <div onClick={(e) => e.stopPropagation()} className="oo-fm-mail-popup-body">
            <div className="oo-fm-mail-popup-header">
              <div className={`oo-fm-mail-popup-title ${locale}`}>{t("Don't Miss an Update!")}</div>
              <button onClick={() => handleCloseForm()} className="oo-fm-mail-popup-close-btn"></button>
            </div>
            {formComplete ? (
              <div className="oo-fm-mail-popup-success">
                <div className="oo-fm-mail-popup-success-text">{t("We sent an email message with confirmation to your email address.")}</div>
                <button onClick={() => handleCloseForm()} className="oo-fm-mail-popup-success-btn">{t("OK")}</button>
              </div>
            ) : (
              <div className="oo-fm-mail-popup-form">
                <div className="oo-fm-mail-popup-text">{t("Get the latest ONLYOFFICE news delivered to your inbox")}</div>
                <form onSubmit={handleFormSubmit} className="oo-fm-mail-popup-inputs">
                  <div className="oo-fm-mail-popup-input-wrapper">
                    <input onChange={handleNameInput} className={`oo-fm-mail-popup-input ${firstNameError ? "error" : ""}`} value={firstName} name="firstName" placeholder={t("First name")} />
                    {firstNameError && (
                      <div className="oo-fm-mail-popup-error-text">{t("First name is empty")}</div>
                    )}
                  </div>
                  <div className="oo-fm-mail-popup-input-wrapper">
                    <input onChange={handleEmailInput} className={`oo-fm-mail-popup-input ${emailError ? "error" : ""}`} value={email} name="email" placeholder={t("Your email")} />
                    {emailError && (
                      <div className="oo-fm-mail-popup-error-text">{emailErrorText}</div>
                    )}
                  </div>
                  <button className={`oo-fm-mail-popup-btn ${isLoading ? "loading" : ""}`} disabled={isLoading && true}>{t("Subscribe")}</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailPopup;