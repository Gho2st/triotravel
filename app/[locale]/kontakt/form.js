"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Form() {
  const [formData, setFormData] = useState({
    text: "",
    fullName: "",
    email: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [errorFields, setErrorFields] = useState([]);
  const recaptchaRef = useRef(null); // Ref dla reCAPTCHA

  // Funkcja walidacji pól formularza
  function validateForm(data) {
    const errors = [];
    if (!data.fullName.trim()) errors.push("fullName");
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.push("email");
    if (!data.text.trim()) errors.push("text");

    setErrorFields(errors);
    return errors.length === 0;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMail = async (e) => {
    e.preventDefault();
    if (isSending) return;

    if (!validateForm(formData)) {
      setFormError("Proszę uzupełnij wszystkie wymagane pola.");
      return;
    }

    // Pobranie tokena reCAPTCHA
    const recaptchaToken = recaptchaRef.current.getValue();
    if (!recaptchaToken) {
      setFormError("Proszę zaznacz, że nie jesteś robotem przed wysłaniem.");
      return;
    }

    // console.log("Wysyłanie danych:", { ...formData, recaptchaToken }); // Dodaj logowanie danych

    setIsSending(true);
    setFormError(null);

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          text: "",
          fullName: "",
          email: "",
        });
        recaptchaRef.current.reset(); // Zresetuj CAPTCHA po wysłaniu
      } else {
        const errorData = await response.json();
        setFormError(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setFormError("Niespodziewany błąd.");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <>
      {/* contact container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:mt-12">
        {/* form container */}
        <div className="">
          {formSubmitted ? (
            <div className="mt-10 lg:mt-20 ">
              <span className="text-2xl ">
                Dziękujęmy za przesłanie formularza!
              </span>
              <p className="font-light text-lg mt-6 ">
                Postaramy się odpowiedzieć tak szybko, jak to możliwe.
              </p>
            </div>
          ) : (
            <form onSubmit={sendMail} className="mt-10">
              <div>
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-lg text-neutral-700  font-medium"
                  >
                    * Imię i Nazwisko
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    onChange={handleChange}
                    value={formData.fullName}
                    placeholder="Wpisz swoję Imię i Nazwisko"
                    style={{
                      border: errorFields.includes("fullName")
                        ? "1px solid red"
                        : "0",
                    }}
                    className="w-full mt-3 mb-5 bg-neutral-100 placeholder:text-neutral-500 p-3 rounded-lg border border-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-lg text-neutral-700 font-medium"
                  >
                    * Twój email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Wpisz swój email"
                    style={{
                      border: errorFields.includes("email")
                        ? "1px solid red"
                        : "0",
                    }}
                    className="w-full mt-3 mb-5 bg-neutral-100 placeholder:text-neutral-500 p-3 rounded-lg border border-gray-400"
                  />
                </div>
              </div>
              <label
                htmlFor="text"
                className="text-lg text-neutral-700  font-medium"
              >
                * Twoja Wiadomość
              </label>
              <textarea
                id="text"
                name="text"
                value={formData.text}
                onChange={handleChange}
                style={{
                  border: errorFields.includes("text") ? "1px solid red" : "0",
                }}
                className="w-full h-40 mt-3 bg-neutral-100 placeholder:text-neutral-500 p-3 rounded-lg border border-gray-400"
              />
              <div className="flex gap-8">
                <ReCAPTCHA
                  className="mt-4"
                  ref={recaptchaRef}
                  sitekey="6LetqpUqAAAAABRwX_slcBybtlkC7S4X4QZZEYUo" // Wstaw swój Site Key
                />
                {formError && (
                  <p className="mt-5" style={{ color: "red" }}>
                    {formError}
                  </p>
                )}
              </div>
              <button
                disabled={isSending}
                type="submit"
                className="flex hover:bg-blue-500 duration-300 cursor-pointer justify-center items-center gap-2 bg-customBlue text-white font-semibold rounded-lg p-4 w-full mt-6"
              >
                {isSending ? "Wysyłanie..." : "Wyślij wiadomość!"}
                <FaLongArrowAltRight className="text-xl" />
              </button>
            </form>
          )}
        </div>

        <div className="mt-10 shadow-2xl border-3 border-[#005588] p-6 py-10 rounded-xl">
          <div className="">
            <h3 className="text-2xl font-semibold text-customBlue">
              Informacje
            </h3>
            <ul className="flex flex-col gap-8 mt-10">
              <li className="flex justify-center md:justify-start gap-2 items-center">
                <FaPhoneAlt className="text-2xl text-customBlue" />
                <Link className="underline text-xl" href={"tel:48881201205"}>
                  +48 881 201 205{" "}
                </Link>
              </li>
              <li className="flex justify-center text-xl md:justify-start gap-2 items-center">
                <IoMail className="text-2xl text-customBlue" />
                <Link className="underline" href={"mailto:biuro@triotravel.eu"}>
                  biuro@triotravel.eu{" "}
                </Link>
              </li>
              <li className="flex justify-center text-xl md:justify-start gap-2 items-center">
                <FaLocationDot className="text-2xl text-customBlue" />
                ul. Kościuszki 23A, 34-500 Zakopane
              </li>
            </ul>
          </div>
          <div className="mt-16 text-xl">
            <h3 className="text-2xl font-semibold text-customBlue">
              Godziny Otwarcia
            </h3>
            <div className="mt-8">
              <h4>Poniedziałek - Piątek:</h4>
              <p className=" mt-2">9:00 - 17:00</p>
            </div>
            <div className="mt-8">
              <h4>Sobota - Niedziela:</h4>
              <p className=" mt-2">10:00 - 16:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
