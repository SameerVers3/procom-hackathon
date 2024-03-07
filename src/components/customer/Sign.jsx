import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast"
 
const Sign = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast()
  const [username, setUsername] = useState("");
  const [accountNumber, setAccountnumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "username":
        setUsername(value);
        break;
      case "accountnumber":
        setAccountnumber(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const handleSignup = async () => {
    setLoading(true);
    console.log(accountNumber)

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, accountNumber, email, phone, password }),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (data.message === "User already Exist") {
        return (
          toast({
            title: "User Already Exist",
          })
        )

      } else if (data.message === "User Created Successfully") {
          toast({
            title: "User created successfully",
          })
        
        navigate("/login");
          
      }
      else {
        return (
          toast({
            title: "Failed to Signup ",
            description: "Failed to Signup try again later",
          })
        )
      }
    }
    catch {
      return (
        toast({
          title: "Failed to Signup ",
          description: "Failed to Signup try again later",
        })
      )
    }
    finally {
      setLoading(false);
    }
  }

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigatetologin = () => {
    navigate("/login");
  }

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen gap-8">
        <h2 className="text-2xl">Create Customer Portal account</h2>
        <div className="flex flex-col gap-5">
          <div className="w-96 flex justify-start flex-col gap-3">
            <Label htmlFor="username" className="mr-auto">
              User name
            </Label>
            <Input id="username" onChange={handleChange} placeholder="Enter user name" />
          </div>
          <div className="w-96 flex justify-start flex-col gap-3">
            <Label htmlFor="accountnumber" className="mr-auto">
              Account number
            </Label>
            <Input id="accountnumber" onChange={handleChange} placeholder="Enter your account number" />
          </div>
          <div className="w-96 flex justify-start flex-col gap-3">
            <Label htmlFor="email" className="mr-auto">
              Email
            </Label>
            <Input id="email" onChange={handleChange} placeholder="abc@gmail.com" />
          </div>
          <div className="w-96 flex justify-start flex-col gap-3">
            <Label htmlFor="phone" className="mr-auto">
              Phone
            </Label>
            <Input id="phone" onChange={handleChange} placeholder="0123456789" />
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

          <Button className="mt-4" onClick={handleSignup}>{
            loading ? "Loading..." : "Sign up"
          }</Button>

          <div onClick={navigatetologin}>
            Don't have a account ?
            <a className="hover:underline cursor-pointer ">
              {"  "} Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
