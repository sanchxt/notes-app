import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

import { validateEmail } from "../../utils/helpers";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorType, setErrorType] = useState<"email" | "password" | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorType("email");

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setErrorType(null);
      }, 3000);

      return;
    }

    if (!password) {
      setErrorType("password");

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setErrorType(null);
      }, 3000);
      return;
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-100 via-slate-400 to-slate-500">
      <section className="w-screen md:w-1/2 h-screen overflow-hidden">
        <h1 className="w-full italic text-2xl md:text-3xl lg:text-4xl pl-2 md:pt-1">
          Notes
        </h1>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6">
            Welcome back!
          </h2>
          <div className="w-[95%] md:w-[90%] lg:w-[80%] h-2/3 bg-white/90 shadow-xl rounded-lg">
            <p className="text-center italic mb-8 lg:mb-16 text-sm lg:text-lg mt-2 text-gray-800/70">
              &apos;Being organised is the key to success&apos;
            </p>

            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-x-2 px-2 mb-8">
                <label htmlFor="email" className="text-[0.8rem] md:ml-1">
                  {errorType === "email" ? (
                    <p className="text-red-500 animate-shake font-bold">
                      Please enter a valid e-mail address.
                    </p>
                  ) : (
                    <>E-mail</>
                  )}
                </label>
                <input
                  type="email"
                  placeholder="Your e-mail"
                  id="email"
                  name="email"
                  className="login-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value as string)}
                />
              </div>

              <div className="flex flex-col gap-x-2 px-2 mt-8">
                <label htmlFor="password" className="text-[0.8rem] md:ml-1">
                  {errorType === "password" ? (
                    <p className="text-red-500 animate-shake font-bold">
                      Password cannot be blank
                    </p>
                  ) : (
                    <>Password:</>
                  )}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Your password"
                    id="password"
                    name="password"
                    className="w-full login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value as string)}
                  />
                  <div
                    className="absolute right-2 lg:right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
              </div>

              <p className="text-[0.8rem] lg:text-[0.9rem] mt-4 md:mt-5 text-center">
                Don&apos;t have an account yet?{" "}
                <Link to="/signup" className="text-blue-500">
                  Create one!
                </Link>
              </p>

              <button
                type="submit"
                className="flex justify-center items-center w-[96%] mx-auto p-2 h-max bg-blue-600 rounded-lg mt-24 md:text-lg lg:text-xl text-white"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
