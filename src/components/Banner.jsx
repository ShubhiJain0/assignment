import { useState } from 'react'

function Banner() {

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

  const stateImageArray = [
    "Bihar1.png",
    "Bihar2.png",
    "Bihar3.png",
    "Bihar4.png",
  ];
  
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
      <div
        className={`bg-[url(${backgroundImg})]  object-contain bg-cover bg-center h-[40rem] w-full relative`}
      >
        <div className="absolute flex flex-col gap-1 right-8 bottom-5 ">
          {number.map((num) => (
            <div
              className={` text-3xl px-3 py-1 flex justify-center items-center rounded-[100%]  ${
                selectNum == num
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleNumberSelection(num)}
            >
              {num}
            </div>
          ))}
        </div>

        <div className="absolute flex pl-5 gap-10 gap-1 bottom-2 left-10">
          {states.map((state) => (
            <div
              className={` text-3xl px-5 py-2 flex justify-center items-center rounded-md border-4 border-pink-400 ${
                selectState == state
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleStateSelection(state)}
            >
              {state}
            </div>
          ))}
        </div>
      </div>
      <div className='py-20 flex w-full justify-center items-center'>
          <div className='w-30 h-40 bg-pink-500'>
          </div>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </>
  );
}

export default Banner
