import './App.css';
import { urls } from './constants'; 
import { useEffect, useState } from 'react';
import leftArrow from "./assets/left-arrow.png";
import rightArrow from "./assets/right-arrow.png";

function App() {
  // using a state variable to keep track of index to show coming from constants file.
  const[index,setIndex] = useState(0);

  // function to load previous image index
  const prevLoad = ()=>{
    index===0?setIndex(urls.large_screen.length-1):setIndex(index-1);
  }

  // function to load next image index
  const nextLoad = ()=>{
    index===urls.large_screen.length-1?setIndex(0):setIndex(index+1);
  }

  //  for auto load functionality
  useEffect(()=>{
    const load = setInterval(()=>{
      nextLoad();
    },2000);
    // code will run in unmounting cycle - to prevent creation of multiple intervals
    return()=>clearInterval(load);
  },[index])
 
  return (
    <>
    {/* image to show on larger screens */}
      <div>
        { <img src={urls.large_screen[index]} alt="img1" className='hidden md:block w-[100vw] h-[100vh] transition'/> }
      </div>

      {/* image to show on smaller screens */}
      <div>
        { <img src={urls.small_screen[index]} alt="img1" className='block md:hidden w-[100vw] h-[100vh]'/> }
      </div>

      <div className='flex justify-between -mt-80'>
        {
          <img src={leftArrow} alt="img2" className='w-12 h-11 opacity-70 cursor-pointer' onClick={prevLoad}/>
        }
        {
          <img src={rightArrow} alt="img2" className='w-12 h-11 opacity-70 cursor-pointer' onClick={nextLoad}/>
        }
      </div>
    </>
  );
}

export default App;
