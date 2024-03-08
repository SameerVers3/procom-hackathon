import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

import { useToast } from "@/components/ui/use-toast"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'



const InstantPayment = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [customername, setCustomername] = useState("");
    const [customeremail, setCustomeremail] = useState("");
    const [paymentamount, setPaymentamount] = useState("");
    const [customeraccount, setCustomeraccount] = useState("");
    const [bankname, setBankname] = useState("");
    const [paymentpurpose, setPaymentpurpose] = useState("");
    const [merchantaccount, setMerchantaccount] = useState("");

    const toast = useToast();

    const handleChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case "customername":
                setCustomername(value);
                break;
            case "customeremail":
                setCustomeremail(value);
                break;
            case "paymentamount":
                setPaymentamount(value);
                break;
            case "merchantaccount":
                setMerchantaccount(value);
                break;
            case "customeraccount":
                setCustomeraccount(value);
                break;
            case "bankname":
                setBankname(value);
                break;
            case "paymentpurpose":
                setPaymentpurpose(value);
                break;
            default:
                break;
        }
    }

    const handleRequest = async () => {
        console.log("Instant Payment");
        setLoading(true);
        console.log(customername, customeremail, paymentamount, customeraccount, bankname, paymentpurpose, merchantaccount);

        const response = await fetch("http://localhost:3000/request/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${localStorage.getItem('userToken')}`
            },
            body: JSON.stringify({
                customername,
                customeremail,
                paymentamount,
                customeraccount,
                bankname,
                paymentpurpose,
                merchantaccount,
                tstatus: "pending"
            }),
        });
        
        const data = await response.json();
        if (data.message == "success"){
            return (
                toast({
                  title: "Payment Requested success",
                })
              )
        }
        else {
            return (
                toast({
                  title: "Payment Requested failed",
                })
              )
        
        }
        setLoading(false);

    }


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <div className="mt-16">
                <h1 className="text-2xl"><b>Payment Request</b></h1>
                </div>
                <Separator className="my-4 w-[700px]" />
                <div className="border-inherit border rounded-lg p-5">
                    <div className="flex gap-6">
                        <div className="w-48 flex justify-start flex-col gap-3">
                            <Label htmlFor="customername" className="mr-auto">
                                Customer Name
                            </Label>
                            <Input className="bg-slate-100" id="customername" placeholder="Enter customer name" onChange={handleChange} />
                        </div>
                        <div className="w-64 flex justify-start flex-col gap-3">
                            <Label htmlFor="customeremail" className="mr-auto">
                               Customer Email Address(Optional)
                            </Label>
                            <Input className="bg-slate-100" id="customeremail" placeholder="Enter your email address" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-5">
                        <div className="flex justify-start flex-col gap-3">
                            <Label htmlFor="paymentamount" className="mr-auto">
                                Payment Amount
                            </Label>
                            <Input className="bg-slate-100" id="paymentamount" placeholder="abc@gmail.com" onChange={handleChange} />
                        </div>

                        <div className=" flex justify-start flex-col gap-3">
                            <Label htmlFor="customeraccount" className="mr-auto">
                                Customer Account Number
                            </Label>
                            <Input className="bg-slate-100" id="customeraccount" placeholder="0123456789" onChange={handleChange} />
                        </div>

                        <div className=" flex justify-start flex-col gap-3">
                            <Label htmlFor="merchantaccount" className="mr-auto">
                                Merchant Account Number
                            </Label>
                            <Input className="bg-slate-100" id="merchantaccount" placeholder="0123456789" onChange={handleChange} />
                        </div>

                        <div className="">
                            <Label htmlFor="bankname" className="mr-auto">
                                Select Customer Bank Name
                            </Label>
                            <Select  onValueChange={(value) => setBankname(value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a bank" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Banks</SelectLabel>
                                        <SelectItem value="bank alhabib" >Bank Al Habib</SelectItem>
                                        <SelectItem value="meezan bank" >Meezan Bank</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex justify-start flex-col gap-3">
                            <Label htmlFor="paymentpurpose" className="mr-auto">
                                Payment Purpose
                            </Label>
                            <Textarea id="paymentpurpose" className="bg-slate-100" onChange={handleChange}></Textarea>
                        </div>
                        <Button className="mt-4 w-36 ml-auto bg-purple-600 hover:bg-white hover:text-purple-600 hover:border-2" onClick={handleRequest}>{
                            loading ? "Loading..." : "Request"
                        }</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstantPayment;
