/* eslint-disable @next/next/no-img-element */

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name?: String;
  profilePic?: String;
  email: String;
  password: String;
}

function Signup(): React.JSX.Element {
  const router = useRouter();
  const [data, setData] = React.useState<IFormInput | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setData(data), console.log(data);
  };

  const onSignup = () => {
    router.push("/login");
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
      <img
        className="h-14 w-14 mb-8 text-center"
        src="https://th.bing.com/th/id/R.3f7189662f19f8318fc75252deee723a?rik=Qa956Np1tp8Zcg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fTwitter-Logo.png&ehk=6ekNd2ZmhpvFDGRZF19QcumP9fb8pZRkwrbFbK%2bpULA%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      {/* <button className="bg-twitter text-white px-3 py-2 rounded-md hover:opacity-80">
        Sign in with Google.
      </button> */}

      {/* <p>OR</p> */}
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          className="w-80 h-12 outline-none border-2 rounded-md p-4 mb-2 "
          type="text"
          placeholder="Name (required if registering)"
          {...register("name", { required: true })}
        />
        <input
          {...register("profilePic")}
          className="w-80 h-12 outline-none border-2 rounded-md p-4 mb-2 "
          type="text"
          placeholder="Profile pic URL (required if registering )"
          {...register("profilePic", { required: true })}
        />
        <input
          className="w-80 h-12 outline-none border-2 rounded-md p-4 mb-2 "
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && (
          <p className="text-red-600 text-center">Email is required!</p>
        )}

        <input
          className="w-80 h-12 outline-none border-2 rounded-md p-4 mb-2 "
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && (
          <p className="text-red-600 text-center">Password is required!</p>
        )}

        <button
          type="submit"
          className="bg-twitter text-white px-3 py-2 rounded-md hover:opacity-80"
          onClick={onSignup}
        >
          Sign Up
        </button>
      </form>

      <p className="mt-8">
        Already a member?{" "}
        <span
          onClick={() => console.log(data)}
          className="text-twitter cursor-pointer text-xl underline underline-offset-2"
        >
          <Link href="/login"> Login now.</Link>
        </span>
      </p>
    </div>
  );
}

export default Signup;
