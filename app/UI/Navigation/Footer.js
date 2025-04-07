import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24 bg-customBlue text-white overflow-hidden ">
      <div className="flex flex-col gap-16 md:flex-row justify-between ">
        <div className="text-xl w-96 text-center md:text-right md:pr-10 border-r-2 border-r-gray-200">
          <h3 className="text-3xl mb-10 xl:mb-16">Godziny Otwarcia</h3>
          <div className="mb-6">
            <h4>Poniedziałek - Piątek:</h4>
            <p className="font-light mt-2">9:00 - 17:00</p>
          </div>
          <div>
            <h4>Sobota - Niedziela:</h4>
            <p className="font-light mt-2">10:00 - 16:00</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center  w-1/2 md:w-1/1 mx-auto">
            <Image
              alt="logo"
              src={"/logo/logo.png"}
              width={330}
              height={330}
              layout="responsive"
            />
          </div>
          <div className="flex mt-10 text-4xl justify-center gap-24">
            <Link
              href={"https://www.facebook.com/TrioTravel"}
              className=" transition-all duration-200 hover:scale-110 rounded-2xl"
            >
              <FaFacebook className="" />
            </Link>
            <Link
              href={"https://www.instagram.com/triotravell/"}
              className=" transition-all duration-200 hover:scale-110 rounded-2xl"
            >
              <FaInstagram className="" />
            </Link>
            <Link
              href={"mailto:biuro@triotravel.eu"}
              className=" transition-all duration-200 hover:scale-110 rounded-2xl"
            >
              <IoMail className="" />
            </Link>
          </div>
        </div>
        <div className="text-xl w-96 text-center md:text-left md:pl-10 border-l-2 border-l-gray-200 ">
          <h3 className="text-3xl mb-10 xl:mb-16">Kontakt z Nami</h3>
          <ul className="flex flex-col gap-4">
            <li>
              Telefon:{" "}
              <Link className="underline" href={"tel:48881201205"}>
                +48 881 201 205{" "}
              </Link>
            </li>
            <li>
              E-mail:{" "}
              <Link className="underline" href={"mailto:biuro@triotravel.eu"}>
                biuro@triotravel.eu{" "}
              </Link>
            </li>
            <li>Adres: ul. Kościuszki 23A, 34-500 Zakopane</li>
          </ul>
        </div>
      </div>
      <div className="mt-24 text-center">
        <p className="text-lg">TrioTravel & Domiweb | 2025</p>
      </div>
    </footer>
  );
}
