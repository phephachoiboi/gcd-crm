/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import "./Login.css";
const Logo = require("../../assets/images/Logo.png");
const PasswordInvisible = require("../../assets/images/PasswordInvisible.png");

const Login = () => (
  <div className="login-container">
    <div css={tw`w-full lg:px-0 md:px-6 sm:px-4`}>
      <div css={tw`mt-[31px] ml-[42px]`}>
        <img src={Logo} alt="" />
      </div>
      <div css={tw`mt-[87px]`}>
        <div
          css={tw`max-w-[505px] w-full mx-auto bg-white border pt-[36px] pb-[40px]`}
          style={{
            borderColor: "#878787",
            borderWidth: "0.5px",
            borderRadius: "10px",
          }}
        >
          <div css={tw`max-w-[423px] w-full lg:ml-[35px] mx-auto`}>
            <div
              css={tw`max-w-[132px] w-full h-[38px] font-sans font-light text-[25px] leading-[37.5px] text-black`}
            >
              <p css={tw`m-0`}>Welcome !</p>
            </div>
            <div css={tw`max-w-[260px] w-full h-[72px] mt-[29px]`}>
              <div
                css={tw`font-sans font-medium text-[31px] leading-[46.5px] text-black`}
              >
                <p css={tw`m-0`}>Log in to</p>
              </div>
              <div
                css={tw`font-sans font-normal text-[16px] leading-[24px] text-black`}
              >
                <p css={tw`m-0`}>Continue</p>
              </div>
            </div>
            {/* Form */}
            <form css={tw`max-w-[423px] w-full mt-[48px]`}>
              <div>
                <label
                  htmlFor="email"
                  css={tw`h-[24px] font-sans font-normal text-[16px] leading-6`}
                >
                  <p css={tw`m-0`}>User name or ID</p>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your user name or ID"
                  css={tw`w-full h-[59px] mt-[9px] pl-[25px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                  font-sans font-[300px] text-[14px] leading-[21px] text-[#ABABAB]`}
                />
              </div>
              <div css={tw`mt-[38px] relative`}>
                <label
                  htmlFor="password"
                  css={tw`h-[24px] font-sans font-normal text-[16px] leading-6`}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your Password"
                  css={tw`w-full h-[59px] mt-[8px] pl-[26px] pr-[40px] border border-gray-300 rounded-md focus:outline-none 
                  font-sans font-[300px] text-[14px] leading-[21px] text-[#ABABAB]`}
                />
                <span
                  css={tw`mt-[16px] absolute right-[28px] top-[50%] transform -translate-y-[50%] cursor-pointer`}
                  onClick={() => {
                    const passwordInput = document.getElementById(
                      "password"
                    ) as HTMLInputElement;
                    if (passwordInput?.type === "password") {
                      passwordInput.type = "text";
                    } else {
                      passwordInput.type = "password";
                    }
                  }}
                >
                  <img src={PasswordInvisible} alt="" />
                </span>
              </div>
              <div css={tw`flex items-center justify-between mt-[23px]`}>
                <label css={tw`flex items-center`}>
                  <input
                    type="checkbox"
                    css={tw`w-[15px] h-[15px] mr-[10px] mt-[3px] border border-black rounded-none`}
                  />
                  <div
                    css={tw`h-[18px] font-sans font-[300px] text-[12px] leading-[18px] text-black`}
                  >
                    <p>Remember me</p>
                  </div>
                </label>
                <a
                  href="#"
                  css={tw`w-[109px] font-sans font-[300px] text-[12px] leading-[18px] text-[#5577FF] hover:underline`}
                >
                  Forgot Password ?
                </a>
              </div>
              <button
                type="submit"
                css={tw`w-full h-[57px] mt-[38px] bg-[#5577FF] text-white rounded-md hover:bg-blue-700 focus:outline-none`}
              >
                <div
                  css={tw`h-[24px] font-sans font-[500px] text-[16px] leading-[24px] text-[#FFFFFF]`}
                >
                  <p>Login</p>
                </div>
              </button>
            </form>
            <div
              css={tw`max-w-[268px] w-full text-center mt-[56px] lg:ml-[77px] mx-auto`}
            >
              <p css={tw`font-sans text-[16px] leading-6 text-[#7D7D7D]`}>
                Don't have an Account ?{" "}
                <a
                  href="#"
                  css={tw`font-sans font-[600px] text-[16px] leading-[24px] text-blue-600 hover:underline`}
                >
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
