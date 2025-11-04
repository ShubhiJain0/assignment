
import { CiHeadphones } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiLocationArrow1 } from "react-icons/ci";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  

  return (
    <>
      <nav className="flex justify-between p-2 bg-[#064266] text-white text-lg">
        <div className="flex justify-around lg:px-40 gap-5">
          <div className="flex justify-center items-center">
            <CiLocationArrow1 className="h-10 w-8" />
            <span className="font-bold">Apply Online</span>
          </div>
          <div className="flex justify-center items-center">
            <CiLogin className="h-10 w-8" />
            <span className="font-bold">Student login</span>
          </div>
          <div className="flex justify-center items-center">
            <MdOutlineWifiCalling3 className="h-10 w-8" />
            <span className="font-bold">Request a callback</span>
          </div>
        </div>

        <div className="flex gap-2 lg:pr-40">
          <div className="flex justify-center items-center border-2 border-pink-400 rounded-full p-1 bg-white">
            <CiInstagram className="w-6 h-6 text-pink-400" />
          </div>

          <div className="flex justify-center items-center border-2 border-pink-400 rounded-full p-1 bg-white">
            <CiFacebook className="w-6 h-6 text-pink-400" />
          </div>
          <div className="flex justify-center items-center border-2 border-pink-400 rounded-full p-1 bg-white">
            <FaXTwitter className="w-6 h-6 text-pink-400" />
          </div>
          <div className="flex justify-center items-center border-2 border-pink-400 rounded-full p-1 bg-white">
            <CiLinkedin className="w-6 h-6 text-pink-400" />
          </div>
          <div className="flex justify-center items-center border-2 border-pink-400 rounded-full p-1 bg-white">
            <CiYoutube className="w-6 h-6 text-pink-400" />
          </div>
        </div>
      </nav>
      <nav
        className="flex justify-between lg:px-40 border-gray-200 gap-5
      border-b-2"
      >
        <div>
          <div className="w-35 h-20 flex justify-center items-center">
            <img src="./logo.png" alt="" />
          </div>
        </div>

        <div className="flex justify-around gap-5">
          <div className="flex justify-center items-center">
            <button
              className="bg-gradient-to-r from-blue-500 via-purple-500
               to-pink-500 flex items-center justify-center text-white rounded-lg p-1"
            >
              <div>
                <CiHeadphones className="h-8 w-10" />
              </div>
              Live counselling
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <IoIosCall />
            </div>
            call us
          </div>
          <div className="flex justify-center items-center">
            <div>
              <MdOutlineMail className="h-8 w-10" />
            </div>
            email us
          </div>
          <div className="flex justify-center items-center">
            <div>
              <FaWhatsapp className="h-8 w-10" />
            </div>
            Whatsapp
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-gradient-to-r from-blue-500 via-purple-500
               to-pink-500 flex items-center justify-center text-white rounded-lg p-1"
            >
              <SlCalender className="w-10 h-8" />
              book appointment
            </button>
          </div>
        </div>
      </nav>

      <nav className="w-screen flex justify-center items-center lg:gap-10 md:gap-6 text-lg ">
        <div className="hover:text-pink-600 transition ease-in-out">Home</div>
        <div className="hover:text-pink-600 transition ease-in-out">About</div>
        <div className="flex gap-2 justify-center items-center hover:text-pink-600 transition ease-in-out">
          Destinations <IoIosArrowDown />
        </div>
        <div className="flex gap-2 justify-center items-center hover:text-pink-600 transition ease-in-out">
          Course <IoIosArrowDown />
        </div>
        <div className="hover:text-pink-600 transition ease-in-out">
          Neet predictor
        </div>
        <div className="hover:text-pink-600 transition ease-in-out">
          Packages
        </div>
        <div className="hover:text-pink-600 transition ease-in-out">
          Contact us
        </div>
        <div className="hover:text-pink-600 transition ease-in-out">
          Gallery
        </div>
        <div className="hover:text-pink-600 transition ease-in-out">Blog</div>
      </nav>
    </>
  );
}

export default Navbar;
