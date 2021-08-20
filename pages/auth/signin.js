import Link from "next/link";
import { signIn } from "next-auth/client";

function Signin() {
  return (
    <div className="h-screen flex flex-col justify-center items-center border-fuschia-500 border-t-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="">
          <h3 className="text-gray-800 text-2xl font-bold">Next-Auth</h3>
        </div>
        <div className="h-[1px] bg-gray-300 w-52 my-4"></div>
        <div className="my-4">
          <button
            className="px-4 py-3 flex items-center bg-black rounded-md text-gray-200 shadow"
            onClick={() =>
              signIn("github", { callbackUrl: "http://localhost:3000" })
            }
          >
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              role="presentation"
              aria-hidden="true"
              className="w-6 h-6 mr-2"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </g>
            </svg>
            Continue with Github
          </button>
        </div>
        <div>
          <Link href="/">
            <a className="text-blue-400 hover:underline">Back to home</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
