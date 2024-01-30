import { useState } from "react";
import HomeLayout from "../HomeLayout/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createAccount } from "../redux/slices/authSlice";
import { BsPersonFill } from "react-icons/bs";
function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState("");
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });
  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  }
  function getImage(e) {
    e.preventDefault();
    const uploadedImage = e.target.files[0];
    setSignUpData({
      ...signUpData,
      avatar:uploadedImage,
    });
    const fileReader = new FileReader();
    fileReader.readAsDataURL(uploadedImage);
    fileReader.addEventListener("load",function() {
      setPreviewImage(this.result);
    });
    
  }
  async function createNewAccount(e) {
    
    e.preventDefault();
    console.log(signUpData);
    if (
      !signUpData.fullName ||
      !signUpData.email ||
      !signUpData.password ||
      !signUpData.confirmPassword
    ) {
      toast.error("All fields are required");
      return;
    }
    if (signUpData.fullName.length < 5) {
      toast.error("Full name should be greater than 5 characters");
      return;
    }
    if (
      !signUpData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      toast.error("Email not valid");
      return;
    }
    if (
      !signUpData.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
      )
    ) {
      toast.error(
        "Password must be Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );
      return;
    }
    if (signUpData.password != signUpData.confirmPassword) {
      toast.error("Password did not match");
      return;
    }
    const formData = new FormData();
    formData.append("fullName", signUpData.fullName);
    formData.append("email", signUpData.email);
    formData.append("password", signUpData.password);
    formData.append("confirmPassword", signUpData.confirmPassword);
    formData.append("avatar", signUpData.avatar);
    const response = await dispatch(createAccount(formData));
    if (response?.payload?.success) {
      setSignUpData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        avatar: "",
      });
      setPreviewImage("");
      navigate("/login");
    }
  }
  return (
    <HomeLayout>
      <div className="h-fit flex items-center justify-center mt-[250px] mb-[20px]">
        <div className="h-fit w-[944px] bg-[#8000FF] rounded-xl">
          <h1 className="text-[85px] font-bold text-center">
            Registration Form
          </h1>
          <form
            noValidate
            onSubmit={createNewAccount}
            className="flex gap-[10px] flex-col"
          >
            <div>
              <label htmlFor="avatar" className="cursor-pointer">
                {previewImage ? (
                  <img
                    src={previewImage}
                    className="rounded-full w-48 h-48 m-auto border-2"
                  />
                ) : (
                  <BsPersonFill className="rounded-full w-48 h-48 m-auto text-white border-2 px-4" />
                )}
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                className="hidden"
                accept=".png,.jpg,.jpeg,.svg"
                onChange={getImage}
              />
            </div>
            <div className="flex flex-col px-8">
              <label htmlFor="fullName" className="text-[36px] font-bold">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Please enter your full name"
                className="w-[882px] h-[75px] px-4 placeholder:text-2xl text-[25px]"
                onChange={handleUserInput}
                value={signUpData.fullName}
                required
              />
            </div>
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
                value={signUpData.email}
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
                value={signUpData.password}
                required
              />
            </div>
            <div className="flex flex-col px-8">
              <label
                htmlFor="confirmPassword"
                className="text-[36px] font-bold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Please confirm your password"
                className="w-[882px] h-[75px] px-4 placeholder:text-2xl text-[25px]"
                onChange={handleUserInput}
                value={signUpData.confirmPassword}
                required
              />
            </div>
            <div className="flex items-center gap-[10px] px-8 justify-start">
              <p className="text-[20px] text-white font-semibold">
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy.
              </p>
            </div>
            <button
              type="submit"
              className="w-[465px] h-[70px] bg-[#00A400] text-3xl font-bold m-auto"
            >
              Sign Up
            </button>
            <p className="text-center text-2xl text-white">
              Have an account?{" "}
              <Link to="/login" className="link text-blue-500 font-bold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </HomeLayout>
  );
}
export default SignUp;
