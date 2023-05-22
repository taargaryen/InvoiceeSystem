'use client'
import { useState , useEffect } from "react"
import Image from "next/image";
import Link from "next/link";
import Logo from '../../../assets/img/Logo1.png'

const Navbarre = () => {

  const [windowWidth, setWindowWidth] = useState(undefined);
  useEffect(() => {
    const handleResize = () => {
           setWindowWidth(window.innerWidth)  
    };

    handleResize()
    
    window.addEventListener('resize', handleResize);
    //console.log(windowWidth)
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

   
  return (
    <nav>
           {/*pc Mode */}
           {
            windowWidth > 700 ? 
            <nav className="container m-auto flex justify-between items-center"> 
                  <Image src={Logo} alt="LogoImage" className="ml-7 mt-2 w-36"/>  
                  <div className="flex">
                      <Link className="ml-5 mr-5 text-xl basicColor hover:text-pink-700 font-medium transition-colors ease-in transform cursor-pointer"  href="/"><h1>Home</h1></Link>
                      <Link className="ml-5 mr-5 text-xl basicColor hover:text-pink-700 font-medium transition-colors ease-in transform cursor-pointer"  href="/over"><h1>Over Ons</h1></Link>
                      <Link className="ml-5 mr-5 text-xl basicColor hover:text-pink-700 font-medium transition-colors ease-in transform cursor-pointer"  href="/diensten"><h1>Diensten</h1></Link>
                      <Link className="ml-5 mr-5 text-xl basicColor hover:text-pink-700 font-medium transition-colors ease-in transform cursor-pointer"  href="/contact"><h1>Contact</h1></Link>
                  </div>
                  <button type="button" className="ml-2 mr-2 basicColor hover:text-pink-700 bg-pink-300 pl-5 pr-5 font-bold pt-1 pb-1 rounded-md text-xl hover:bg-pink-400 hover:shadow-pink-600 hover:shadow-sm  transition-colors ease-in transform cursor-pointer " onClick={()=>{}}><h1>Login</h1></button>
            </nav> : 
            <h1>Phone Mode</h1>
             
           }
    </nav>
  )
}





export default Navbarre
