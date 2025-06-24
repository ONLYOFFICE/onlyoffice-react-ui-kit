/*
 * (c) Copyright Ascensio System SIA 2024-2025
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

import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import "./MailPopup.scss";

const MailPopup = ({
  t,
  locale,
  popupIsOpen,
  setPopupIsOpen,
  mailApiUrl,
  mailApiType,
}) => {
  const modalRef = useRef(null);
  const [formComplete, setFormComplete] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validFirstName, setValidFirstName] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState(t("EmailIsEmpty"));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (popupIsOpen && modalRef.current) {
      const focusableElements =
        modalRef.current.querySelectorAll("button, input");
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (firstElement) firstElement.focus();

      const trapFocus = (e) => {
        if (e.key !== "Tab") return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener("keydown", trapFocus);
      return () => {
        document.removeEventListener("keydown", trapFocus);
      };
    }
  }, [popupIsOpen]);

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
    }

    if (!email) {
      setEmailError(true);
    }

    setEmailErrorText(
      email.length === 0 ? t("EmailIsEmpty") : t("EmailIsIncorrect"),
    );

    if (validFirstName && validEmail) {
      setIsLoading(true);

      try {
        const response = await fetch(mailApiUrl, {
          method: "POST",
          body: JSON.stringify({
            firstname: firstName,
            email: email,
            type: mailApiType,
          }),
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
    }

    setValidEmail(false);
    setValidFirstName(false);
    setPopupIsOpen(false);
    setEmail("");
    setFirstName("");
    setEmailError(false);
    setFirstNameError(false);
  };

  return (
    <div
      ref={modalRef}
      onClick={() => handleCloseForm()}
      className={clsx(
        "oo-footer-mail-popup",
        popupIsOpen && "oo-footer-mail-popup--active",
      )}
    >
      <div className="oo-footer-mail-popup-container">
        <div className="oo-footer-mail-popup-wrapper">
          <div
            onClick={(e) => e.stopPropagation()}
            className="oo-footer-mail-popup-body"
          >
            <div className="oo-footer-mail-popup-header">
              <div className={clsx("oo-footer-mail-popup-title", locale)}>
                {t("DontMissAnUpdate")}
              </div>
              <button
                onClick={() => handleCloseForm()}
                className="oo-footer-mail-popup-close-btn"
              ></button>
            </div>
            {formComplete ? (
              <div className="oo-footer-mail-popup-success">
                <div className="oo-footer-mail-popup-success-text">
                  {t("WeSentAnEmailMessage")}
                </div>
                <button
                  onClick={() => handleCloseForm()}
                  className="oo-footer-mail-popup-success-btn"
                >
                  {t("OK")}
                </button>
              </div>
            ) : (
              <div className="oo-footer-mail-popup-form">
                <div className="oo-footer-mail-popup-text">
                  {t("GetTheLatestOONews")}
                </div>
                <form
                  onSubmit={handleFormSubmit}
                  className="oo-footer-mail-popup-inputs"
                >
                  <div className="oo-footer-mail-popup-input-wrapper">
                    <input
                      onChange={handleNameInput}
                      className={clsx(
                        "oo-footer-mail-popup-input",
                        firstNameError && "oo-footer-mail-popup-input--error",
                      )}
                      value={firstName}
                      name="firstName"
                      placeholder={t("FirstName")}
                    />
                    {firstNameError && (
                      <div className="oo-footer-mail-popup-error-text">
                        {t("FirstNameIsEmpty")}
                      </div>
                    )}
                  </div>
                  <div className="oo-footer-mail-popup-input-wrapper">
                    <input
                      onChange={handleEmailInput}
                      className={clsx(
                        "oo-footer-mail-popup-input",
                        emailError && "oo-footer-mail-popup-input--error",
                      )}
                      value={email}
                      name="email"
                      placeholder={t("YourEmail")}
                    />
                    {emailError && (
                      <div className="oo-footer-mail-popup-error-text">
                        {emailErrorText}
                      </div>
                    )}
                  </div>
                  <button
                    className={clsx(
                      "oo-footer-mail-popup-btn",
                      isLoading && "oo-footer-mail-popup-btn--loading",
                    )}
                    disabled={isLoading && true}
                  >
                    {t("Subscribe")}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { MailPopup };
