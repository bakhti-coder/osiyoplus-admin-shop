"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState({
    type: "",
    message: "",
  });
  const [succsesMessega, SetSuccsesMessega] = useState({
    type: "",
    message: "",
  });

  const handleLogin = (e: any) => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: username.value, // mor_2314
        password: password.value, // 83r5^_
        headers: {
          "Content-Type": "appliaction/json",
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        router.push('/')
        SetSuccsesMessega({
          type: "succses",
          message: "Muvaffaqiyatli",
        });
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage({
          type: "error",
          message: "Username yoki Parol xato",
        });
        setTimeout(() => {
          setErrorMessage({
            type: "",
            message: "",
          });
        }, 3000);
      });
  };

  return (
    <section className="hello">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen md:h-screen lg:py-0 ">
        <Link
          href="/login"
          className="flex text-white items-center mb-6 text-2xl font-semibold"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          www.osiyoplus.com
        </Link>
        <div className="w-full bg-black rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Login
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => handleLogin(e)}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="border border-gray text-graydark font-semibold sm:text-sm rounded-lg  block w-full p-2.5 "
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 text-white">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className=" border border-gray text-graydark font-semibold sm:text-sm rounded-lg  block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-graydark"
              >
                Kirish
              </button>
            </form>
            {errorMessage.type === "error" && (
              <h1 className="text-center my-2 text-error font-semibold">
                {errorMessage.message}
              </h1>
            )}
            {succsesMessega.type === "succses" && (
              <h1 className="text-center my-2 text-success font-semibold">
                {succsesMessega.message}
              </h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
