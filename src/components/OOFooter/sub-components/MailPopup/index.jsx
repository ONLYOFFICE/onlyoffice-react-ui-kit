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
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    email: false,
  });
  const [formComplete, setFormComplete] = useState(false);
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

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    let errors = {
      firstName: formData.firstName.trim() === "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
    };
    setFormErrors(errors);
    return !Object.values(errors).some((v) => v);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(mailApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          firstName: formData.firstName,
          email: formData.email,
          type: mailApiType,
        }),
      });

      if (response.ok) {
        setFormComplete(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseForm = () => {
    setPopupIsOpen(false);
    setFormData({ firstName: "", email: "" });
    setFormErrors({ firstName: false, email: false });
    setFormComplete(false);
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
            className="oo-footer-mail-popup-content"
          >
            <div className="oo-footer-mail-popup-body">
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
                        onChange={(e) =>
                          handleChange("firstName", e.target.value)
                        }
                        className={clsx(
                          "oo-footer-mail-popup-input",
                          formErrors.firstName &&
                            "oo-footer-mail-popup-input--error",
                        )}
                        value={formData.firstName}
                        name="firstName"
                        placeholder={t("FirstName")}
                      />
                      {formErrors.firstName && (
                        <div className="oo-footer-mail-popup-error-text">
                          {t("FirstNameIsEmpty")}
                        </div>
                      )}
                    </div>
                    <div className="oo-footer-mail-popup-input-wrapper">
                      <input
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={clsx(
                          "oo-footer-mail-popup-input",
                          formErrors.email &&
                            "oo-footer-mail-popup-input--error",
                        )}
                        value={formData.email}
                        name="email"
                        placeholder={t("YourEmail")}
                      />
                      {formErrors.email && (
                        <div className="oo-footer-mail-popup-error-text">
                          {formData.email.length === 0
                            ? t("EmailIsEmpty")
                            : t("EmailIsIncorrect")}
                        </div>
                      )}
                    </div>
                    <button
                      className={clsx(
                        "oo-footer-mail-popup-btn",
                        isLoading && "oo-footer-mail-popup-btn--loading",
                      )}
                      disabled={isLoading}
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
    </div>
  );
};

export { MailPopup };
