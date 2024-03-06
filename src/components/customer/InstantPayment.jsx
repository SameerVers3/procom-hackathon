import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";


const InstantPayment = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen gap-8">
        <h1 className="text-2xl"><b>Instant Payment</b></h1>
        <div>
        <div className="flex gap-6">
            <div className="w-48 flex justify-start flex-col gap-3">
            <Label htmlFor="username" className="mr-auto">
              Username
            </Label>
            <Input id="username" placeholder="Enter user name" />
          </div>
          <div className="w-64 flex justify-start flex-col gap-3">
            <Label htmlFor="accountnumber" className="mr-auto">
              Email Address(Optional)
            </Label>
            <Input id="accountnumber" placeholder="Enter your account number" />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-5">
          <div className=" flex justify-start flex-col gap-3">
            <Label htmlFor="email" className="mr-auto">
              Payment account
            </Label>
            <Input id="email" placeholder="abc@gmail.com" />
          </div>
          <div className=" flex justify-start flex-col gap-3">
            <Label htmlFor="phone" className="mr-auto">
              Phone
            </Label>
            <Input id="phone" placeholder="0123456789" />
          </div>
          <div className="flex justify-start flex-col gap-3 relative">
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

          <Button className="mt-4">Sign up</Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default InstantPayment;