import React, { useState, useContext } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.id === "phone") {
      setUsername(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  }



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const login = async () => {
      try {
          setLoading(true);
          const response = await fetch("http://localhost:3000/auth/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, password }),
          });
          const data = await response.json();
          localStorage.setItem("userToken", data.token);
          setUser({ isLoggedIn: true, username: username, admin: true });
          setLoading(false);
      }
      catch (error) {
          console.error("Error:", error);
          setLoading(false);
      }
      finally {
          setLoading(false);
      }
  }

  const navigatetosign = () => {
    navigate("/sign");
  }

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen gap-8">
        <h2 className="text-2xl">Login Customer Portal account</h2>
        <div className="flex flex-col gap-5">


          <div className="w-96 flex justify-start flex-col gap-3">
            <Label htmlFor="phone" className="mr-auto">
              User name
            </Label>
            <Input id="phone" placeholder="Enter user name" onChange={handleChange} />
          </div>
          <div className="w-96 flex justify-start flex-col gap-3 relative">
            <Label htmlFor="password" className="mr-auto">
              Password
            </Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter at least 8+ characters"
              onChange={handleChange}
            />
            <button
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <Button className="mt-4" onClick={login}>{
            loading ? "Loading..." : "Login"
          }</Button>
          <div onClick={navigatetosign}>
            Don't have a account ?
            <a className="hover:underline cursor-pointer ">
              {"  "} Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
