/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

const Login = () => (
  <div css={tw`w-full lg:px-0 md:px-6 sm:px-4`}>
    <div css={tw`mt-[162px]`}>
      <div css={tw`max-w-[423px] w-full mx-auto`}>
        <div
          css={tw`max-w-[132px] w-full h-[38px] font-sans font-light text-[25px] leading-[37.5px] text-black`}
        >
          <p css={tw`m-0`}>Welcome !</p>
        </div>
        <div css={tw`max-w-[260px] w-full h-[72px] mt-[29px]`}>
          <div
            css={tw`font-sans font-medium text-[31px] leading-[46.5px] text-black`}
          >
            <p css={tw`m-0`}>Log in to </p>
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
              css={tw`font-sans font-normal text-[16px] leading-6`}
            >
              <p css={tw`m-0`}>User name or ID</p>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your user name or ID"
              css={tw`w-full h-[59px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          <div css={tw`mt-[38px]`}>
            <label
              htmlFor="password"
              css={tw`font-sans font-normal text-[16px] leading-6`}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              css={tw`w-full h-[59px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          <div css={tw`flex items-center justify-between mt-[23px]`}>
            <label css={tw`flex items-center`}>
              <input type="checkbox" css={tw`mr-3`} />
              Remember me
            </label>
            <a href="#" css={tw`text-blue-600 hover:underline`}>
              Forgot Password ?
            </a>
          </div>
          <button
            type="submit"
            css={tw`w-full h-[57px] mt-[38px] bg-[#5577FF] text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none`}
          >
            Login
          </button>
        </form>
        <div
          css={tw`max-w-[268px] w-full text-center text-gray-600 text-sm mt-4 mx-auto`}
        >
          <p css={tw`font-sans font-light text-[16px] leading-6`}>
            Don't have an Account ?{" "}
            <a href="#" css={tw`text-blue-600 hover:underline font-semibold`}>
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
