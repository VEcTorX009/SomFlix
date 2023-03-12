import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";
interface Inputs {
  email: string;
  password: string;
}
function login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };

  return (
    <div className="relatvie flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>SomFlix</title>
        <link
          rel="icon"
          href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Head>
      <img
        alt="Login_Banner"
        src="https://rb.gy/p2hphi"
        className="-z-10 object-cover !hidden opacity-60 sm:!inline"
      />

      <img
        alt="Background Banner"
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute mt-24 space-y=8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="mt-5 space-y-4">
          <label className="inline-block w-full">
            <input
              {...(register("email"), { required: true })}
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="input"
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label
            {...(register("password"), { required: true })}
            className="inline-block w-full"
          >
            <input type="password" placeholder="Password" className="input" />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button className="mt-5 w-full rounded bg-[#e50914] py-3 font-semibold" onClick={()=> setLogin(true)}>
          Sign In
        </button>

        <div className=" mt-5 text-[gray]">
          New to Netflix?{" "}
          <button type="submit" onClick={()=> setLogin(false)} className="text-white hover:underline">
            Sign Up Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default login;
