import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";


function Login(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [loginData,setLoginData]=useState({
        email:"",
        password:""
    })
    function handleUserInput(e){
        const {name,value}=e.target;
        setLoginData({
            ...loginData,
            [name]:value
        })
    }
    async function userLogin(e){
        e.preventDefault();
        if(!loginData.email || !loginData.password){
            toast.error("All fields are required");
            return;
        }
        if(!loginData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            toast.error("Not a valid email");
            return;
        }
        if(!loginData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/)){
            toast.error("Not a valid password");
            return;
        }
        const response=await dispatch(loginUser(loginData));
      
        if(response?.payload?.success){
         
            setLoginData({
                email:"",
                password:""
            })
            navigate("/");
           
        }
        
    }
    return<HomeLayout>
    <div className="h-fit flex items-center justify-center mt-[250px] mb-[20px]">
      <div className="h-fit w-[944px] bg-[#8000FF] rounded-xl">
        <h1 className="text-[85px] font-bold text-center">
          Login 
        </h1>
        <form
          noValidate
          onSubmit={userLogin}
          className="flex gap-[10px] flex-col"
        >
          <div className="flex flex-col px-8">
            <label htmlFor="email" className="text-[36px] font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Please enter your email"
              className="w-[882px] h-[75px] px-4 placeholder:text-2xl text-[25px]"
              onChange={handleUserInput}
              value={loginData.email}
              required
            />
          </div>
          <div className="flex flex-col px-8">
            <label htmlFor="password" className="text-[50px] font-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Please enter your password"
              className="w-[882px] h-[75px] px-4 placeholder:text-2xl text-[25px]"
              onChange={handleUserInput}
              value={loginData.password}
              required
            />
          </div>
         
          <button
            type="submit"
            className="w-[465px] h-[70px] bg-[#00A400] text-3xl font-bold m-auto"
          >
            Log in
          </button>
          <p className="text-center text-2xl text-white mb-[20px]">
            Create an account ?{" "}
            <Link to="/signup" className="link text-blue-500 font-bold ">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  </HomeLayout>
}
export default Login;