import logo from '../assets/images/logo.png'
import {BsFacebook,BsYoutube,BsInstagram,BsTwitter} from 'react-icons/bs'
function Footer(){
    const date=new Date();
    const year=date.getFullYear();
    return<footer className="w-full h-[304px] bg-[#1F612E] relative bottom-0 left-0  px-[162px] py-2 ">
       <div className='flex gap-[44px]'>
       <div>
            <img src={logo} alt="logo"/>
        </div>
        <div>
            <ul>
                <li className='font-bold text-[36px]'>Contact Us</li>
                <li className='text-[30px]'>01484534-9840759969</li>
                <li className='text-[30px]'>Mandikhatar,Kapan</li>
                <li className='text-[30px]'>BookPlay@gmail.com</li>
            </ul>
        </div>
        <div>
            <p className='font-bold text-[36px]'>FAQ</p>
        </div>
        <div>
            <p className='font-bold text-[36px]'>About US</p>
        </div>
        <section className='flex gap-[32px] text-3xl mt-[10px]'>
            <a href='#' className=''>
                <BsFacebook/>
            </a>
            <a href='#'>
                <BsYoutube/>
            </a>
            <a href='#'>
                <BsInstagram/>
            </a>
            <a href='#'>
                <BsTwitter/>
            </a>
        </section>
       </div>
       <div className='font-semibold text-3xl text-center mt-8'>
        Copyright {year} | All rights reserved
       </div>
    </footer>
}
export default Footer;