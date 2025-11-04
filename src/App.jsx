import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
import Navbar from './components/Navbar';
import Banner from './components/Banner';
function App() {

 const [selectNum, setSelectNum]= useState(1)

 const [backgroundImg, setBackgroundImg]=useState('Bihar.png');
 const [selectState, setSelectState] = useState("Bihar");

 const number=[1,2,3,4];

 const states = ["Bihar", "Gujrat","Karnataka","Madhya Pradesh",];
  const handleNumberSelection=(num)=>{
    console.log(num);
    setSelectNum(num)
    setSelectState(states[num-1])  
  }

  
  const handleStateSelection = (state) => {
    setSelectState(state);
    if (state == "Bihar") {
      setSelectNum(1);
      setBackgroundImg('Bihar.png')
    } else if (state == "Gujrat") {

      setSelectNum(2);
      
      setBackgroundImg("Gujrat.png");
    } else if (state == "Karnataka") {
      setSelectNum(3);
      
      setBackgroundImg("Karnataka.png");
    } else if (state == "Madhya Pradesh") {
      setSelectNum(4);
      setBackgroundImg("madhyapradesh.png");
    }
    
  };
  return (
    <>
      <Navbar />
      <Banner />
      
    </>
  );
}

export default App
