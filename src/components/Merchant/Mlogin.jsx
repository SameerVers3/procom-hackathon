import React, { useState, useContext } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSign =  async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/auth/adminlogin", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      localStorage.setItem("adminToken", data.token);
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


  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen gap-8">
        <div className="flex flex-col text-center">
        <h2 className="text-2xl">Login</h2>
        <h2 className="text-2xl"><b><span className="text-purple-600">PayHabib</span></b> Account</h2>
        </div>
        <div className="flex flex-col gap-5">


          <div className="w-96 flex justify-start flex-col gap-3">
            <Label htmlFor="username" className="mr-auto">
              User name
            </Label>
            <Input id="username" onChange={handleChange} placeholder="Enter user name" />
          </div>
          <div className="w-96 flex justify-start flex-col gap-3 relative">
            <Label htmlFor="password" className="mr-auto">
              Password
            </Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange={handleChange}
            />
            <button
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <Button className="mt-4 bg-purple-600 hover:bg-white hover:text-purple-600 hover:border-2" onClick={handleSign} >
            {
              loading ? "Loading..." : "Sign in"
            }
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
