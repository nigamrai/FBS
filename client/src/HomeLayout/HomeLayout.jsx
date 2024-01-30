import Footer from "../Components/Footer";
import logo from '../assets/images/logo.png'
import { BsSearch } from "react-icons/bs";
import {Link} from 'react-router-dom';
import {  useSelector } from "react-redux";
function HomeLayout({children}) {
  const isLoggedIn=useSelector((state)=>state?.auth?.isLoggedIn);
  const role=useSelector((state)=>state?.auth?.role);
  return(
    <div className="min-h-[90vh] ">
        <header className="h-[231px] bg-[#176629] px-[162px] py-4 fixed">
            <div className="flex gap-[26px] items-center">
              <img src={logo} alt="logo" className="w-[303px]"/>
              <div className="relative">
                <div>
                <BsSearch className="text-4xl absolute top-[25px] left-[10px]"/></div><input type='text' className="bg-yellow-500  w-[885px] h-[84px] text-4xl pl-[60px] placeholder-black border-black border-2 rounded" placeholder="Search futsals"/>
              </div>
            <div className="bg-[#8000FF] w-[168px] h-[64px] flex items-center justify-center  rounded-[5px] hover:text-white">
                  {isLoggedIn ? (
                      <Link to='/me'><p className="font-bold text-[25px] mx-2">My Profile</p></Link>
                  ):( <Link to='/login'><p className="font-bold text-[25px] mx-2">Log in</p></Link>)}
            </div>
              <div className="bg-[#8000FF] w-[168px] h-[64px] flex items-center justify-center  rounded-[5px] hover:text-white">
                 {!isLoggedIn ?(
                 <Link to='/signup'><p className="font-bold text-[25px] mx-2">Signup</p></Link>
                 ):(<Link to='/logout'><p className="font-bold text-[25px] mx-2">Log out</p></Link>)}
              </div>
            </div>
            <nav className="w-[100%] text-[36px] font-bold  mt-[20px]">
              <ul className="flex justify-between">
               <Link to='/city'> <li className="hover:text-white cursor-pointer">Select City</li></Link>
               <Link to='/futsals'><li className="hover:text-white cursor-pointer">Futsals</li></Link>
                <Link to='/about'><li className="hover:text-white cursor-pointer">About Us</li></Link>
                <Link to='/contact'><li className="hover:text-white cursor-pointer">Contact Us</li></Link>
              </ul>
            </nav>
            
        </header>
        {children}
        <Footer/>
    </div>
  )
}

export default HomeLayout;