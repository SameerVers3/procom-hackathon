import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen gap-8">
        <div className="flex flex-col text-center">
        <h2 className="text-2xl">Login</h2>
        <h2 className="text-2xl"><b><span className="text-purple-600">PayHabib</span></b> Account</h2>
        </div>
        <div className="flex flex-col gap-5">


          <div className="w-96 flex justify-start flex-col gap-3">
            <Label htmlFor="phone" className="mr-auto">
              User name
            </Label>
            <Input id="phone" placeholder="Enter user name" />
          </div>
          <div className="w-96 flex justify-start flex-col gap-3 relative">
            <Label htmlFor="password" className="mr-auto">
              Password
            </Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter at least 8+ characters"
            />
            <button
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <Button className="mt-4 bg-purple-600 hover:bg-white hover:text-purple-600 hover:border-2">Sign in</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
